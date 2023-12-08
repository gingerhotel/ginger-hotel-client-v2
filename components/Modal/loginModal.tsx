import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  Text,
  Image,
  Platform,
} from "react-native";
import { colors } from "../../constants/Colors";
import { MonoText } from "../styledText";
import { router, useLocalSearchParams } from "expo-router";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SocialButton from "../socialButton";
import axios from "axios";
import { useMutation } from "react-query";
import { authApple, authGoogle, authKakao } from "../../api/authApi";
import { UserApiResponse } from "../../api/interface";
import { AUTH_URL, MEMBER_URL, ORIGIN_URL } from "../../api/url";

import { useRoute } from "@react-navigation/native";
import { WithLocalSvg } from "react-native-svg";

import {
  login,
  getProfile as getKakaoProfile,
} from "@react-native-seoul/kakao-login";

import * as AppleAuthentication from "expo-apple-authentication";

const kakaoLogo = require("../../assets/logos/kakao.png");
const googleLogo = require("../../assets/logos/google.png");
const closeIcon = require("../../assets/icon/i_close_line.svg");

// console.log(RestApiKey);

WebBrowser.maybeCompleteAuthSession();

export function isEmpty(str: string) {
  if (
    typeof str == "undefined" ||
    str == null ||
    str == "" ||
    str == "undefined"
  )
    return true;
  else return false;
}

type Props = {
  onClose?: any;
  visible?: boolean;
  height?: number | any;
  name: string;
  desc: string;
  closeDisable: boolean;
};

const LoginModal = ({
  height,
  visible,
  onClose,
  name,
  desc,
  closeDisable,
}: Props) => {
  const { id } = useLocalSearchParams();
  const [result, setResult] = useState<string>("");

  const signInWithKakao = async (): Promise<void> => {
    try {
      close();
      const token = await login();
      setResult(JSON.stringify(token));
      if (token) {
        const profile = await getKakaoProfile();
        const _data = {
          id: profile.id,
          name: profile.nickname,
          ci: token,
        };

        try {
          const response = await authKakao(_data);
          const { status, data }: any = response;
          AsyncStorage.setItem("accessToken", data?.accessToken);

          if (status === 200) {
            router.replace("/create");
          } else if (status === 201) {
            const id: any = await AsyncStorage.getItem("kakaoUserId");
            if (!isEmpty(id as string)) {
              router.replace(`/hotel/${id}`);
              AsyncStorage.removeItem("kakaoUserId");
            } else {
              axios
                .get<UserApiResponse>(`${MEMBER_URL}/my`, {
                  headers: {
                    Authorization: `Bearer ${data.accessToken}`,
                    Origin: ORIGIN_URL,
                  },
                })
                .then((response) => {
                  const { hotel } = response.data;
                  router.replace(`/hotel/${hotel.id}`);
                });
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      // setResult(JSON.stringify(token));
    } catch (err) {
      console.error("login err", err);
    }
  };

  const signInWithApple = async (): Promise<void> => {
    try {
      alert("1. 애플 로그인 눌렀습니다");
      try {
        const credential = await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        });

        alert(
          "2. 애플 로그인 토큰 받아와야됩니다. 토큰값 => " +
            JSON.stringify(credential)
        );

        if (credential?.identityToken) {
          const response = await authApple({
            token: credential.identityToken,
          });
          const { status, data }: any = response;

          alert("다 됐다!!!!! 서버에 응답까지 잘 받았음. " + status);

          if (status === 200) {
            router.replace("/create");
          } else if (status === 201) {
            const id: any = await AsyncStorage.getItem("kakaoUserId");
            if (!isEmpty(id as string)) {
              router.replace(`/hotel/${id}`);
              AsyncStorage.removeItem("kakaoUserId");
            } else {
              axios
                .get<UserApiResponse>(`${MEMBER_URL}/my`, {
                  headers: {
                    Authorization: `Bearer ${data.accessToken}`,
                    Origin: ORIGIN_URL,
                  },
                })
                .then((response) => {
                  const { hotel } = response.data;
                  router.replace(`/hotel/${hotel.id}`);
                });
            }
          }
        }
        // const response = await axios.post(
        //   "http://127.0.0.1:8080/auth/apple",
        //   {
        //     token: credential.identityToken,
        //   }
        // );

        // AsyncStorage.setItem("isLogin", "true");
        // AsyncStorage.setItem("accessToken", response.data.accessToken);
      } catch (e: any) {
        alert("에러 1.. " + JSON.stringify(e));
        if (e.code === "ERR_REQUEST_CANCELED") {
          // handle that the user canceled the sign-in flow
        } else {
          // handle other errors
        }
      }
    } catch (err) {
      console.error("login err", err);
      alert("에러 2.. " + JSON.stringify(err));
    }
  };

  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "251638133705-q41nmhb0a21vrbj2vp5rmnn8n1bv2tjh.apps.googleusercontent.com",
    iosClientId:
      "251638133705-sp0utm65q7m50m68g788ftj9rpaa08fr.apps.googleusercontent.com",
    androidClientId:
      "251638133705-5r0r2kasfu3gnvfla7ad4kk4d4sr16ru.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    handleEffect();
  }, [response]);

  const route: any = useRoute();

  async function handleEffect() {
    const user = false;
    //const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        googleAuth(response.authentication?.accessToken as string);
      }
    } else {
      setUserInfo(user);
    }
  }

  const mutation = useMutation(authGoogle, {
    onSuccess: (res: any) => {
      AsyncStorage.setItem("accessToken", res.data.accessToken);

      if (res.status == 200) {
        router.replace("/create");
      } else if (res.status == 201) {
        if (!isEmpty(id as string)) {
          router.replace(`/hotel/${id}`);
          location.reload();
        } else {
          // Todo : Need a Funcional code
          axios
            .get<UserApiResponse>(`${MEMBER_URL}/my`, {
              headers: {
                Authorization: `Bearer ${res.data.accessToken}`,
                Origin: ORIGIN_URL,
              },
            })
            .then((response) => {
              const { hotel } = response.data;
              router.replace(`/hotel/${hotel.id}`);
              location.reload();
            });
        }
      }
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const googleAuth = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await mutation.mutateAsync({
        email: user.email,
        sub: user.id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const setModalVisible = () => {
    promptAsync();
    onClose(); // 부모 컴포넌트에 닫기 이벤트를 전달
  };
  const close = () => {
    onClose();
  };

  const kakaoTest = () => {};

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible();
      }}
    >
      <View style={styles(height).centeredView}>
        <View style={styles(height).modalView}>
          <View style={styles(height).close_btn}>
            {closeDisable ? (
              <></>
            ) : (
              <Pressable onPress={close}>
                {Platform.OS === "ios" || Platform.OS === "android" ? (
                  <WithLocalSvg asset={closeIcon} />
                ) : (
                  <Image source={closeIcon} />
                )}
              </Pressable>
            )}
          </View>
          <Text style={[styles(height).modal_title]}>{name}</Text>
          <Text style={[styles(height).modal_desc]}>
            간편하게 가입하고 진저호텔을 시작하세요!
          </Text>
          <Text style={[styles(height).modal_desc]}>
            삼성/크롬 외부 브라우저 접속을 권장합니다.
          </Text>

          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.grey700,
              marginVertical: 15,
            }}
          ></View>

          <Pressable onPress={signInWithKakao}>
            <View style={[styles(height).kakao]}>
              <Image source={kakaoLogo} style={{ width: 35, height: 35 }} />
              <MonoText style={styles(height).kakao_text}>
                카카오 계정으로 로그인
              </MonoText>
            </View>
          </Pressable>
          <View>
            <Pressable
              style={[styles(height).button, styles(height).google]}
              onPress={() => setModalVisible()}
            >
              <Image source={googleLogo} style={{ width: 30, height: 30 }} />
              <MonoText
                style={[
                  styles(height).textStyle,
                  styles(height).textStyle_google,
                ]}
              >
                구글 계정으로 로그인
              </MonoText>
            </Pressable>
          </View>

          <AppleAuthentication.AppleAuthenticationButton
            buttonType={
              AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
            }
            buttonStyle={
              AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
            }
            cornerRadius={5}
            style={{
              width: 300,
              height: 55,
              borderColor: "#000",
            }}
            onPress={signInWithApple}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = (height: number) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0e0e0eb1",
    },
    modalView: {
      position: "relative",
      margin: 20,
      backgroundColor: colors.grey900,
      borderRadius: 10,
      width: 360,
      padding: 28,
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      borderWidth: 1,
      borderColor: colors.grey900,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 7,
      padding: 13,
      paddingLeft: 10,
      paddingRight: 10,
      elevation: 2,
      width: 300,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    google: {
      backgroundColor: "white",
      margin:10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      flex: 1,
    },
    textStyle_google: {
      color: colors.greyblack,
    },
    kakao_text: {
      color: colors.greyblack,
      fontWeight: "600",
      flex: 1,
      textAlign: "center",
    },
    modal_title: {
      fontSize: 16,
      textAlign: "center",
      color: colors.Whiteyello,
      fontWeight: "600",
    },
    modal_desc: {
      fontSize: 12,
      color: colors.grey500,
      textAlign: "center",
    },
    kakao: {
      backgroundColor: "#FDDC3F",
      borderRadius: 7,
      padding: 13,
      paddingLeft: 10,
      paddingRight: 10,
      elevation: 2,
      width: 300,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    close_btn: {
      position: "absolute",
      top: 10,
      right: 10,
    },
  });

export default LoginModal;
