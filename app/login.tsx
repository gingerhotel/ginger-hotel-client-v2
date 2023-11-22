import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Image, View, Platform, Text, Button, Alert, TextInput } from "react-native";
// import { MonoText } from "../components/styledText";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { WithLocalSvg } from "react-native-svg";
import SocialButton from "../components/socialButton";

import axios from 'axios';

import * as AppleAuthentication from "expo-apple-authentication";
import { ResponseType } from "expo-auth-session";
import { FieldValues, useForm } from "react-hook-form";


//import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";

const SVG = require("../assets/images/StartHotel.svg");
const [userInfo, setUserInfo] = React.useState(null);

export default function Login({ navigation }: any) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "251638133705-q41nmhb0a21vrbj2vp5rmnn8n1bv2tjh.apps.googleusercontent.com",
    iosClientId: "251638133705-sp0utm65q7m50m68g788ftj9rpaa08fr.apps.googleusercontent.com",
  });

  const [token, setToken] = React.useState("");
  const { setValue, register, control, handleSubmit } = useForm();

  React.useEffect(() => {
    register("socialId");
  }, [register]);

  React.useEffect(() => {
    handleEffect();
  }, [response]);

  const handleLoginProd = async (data: FieldValues) => {
    //const url:string = isRelease ? "http://localhost:8080" : "https://gingerhotel-server.site"
    axios
      .post(`https://gingerhotel-server.site/auth/test`, {
        socialId: data.socialId,
        vendor: "NAVER",
      })
      .then((res) => {
        console.log(res);
        AsyncStorage.setItem('isLogin', "true");
        AsyncStorage.setItem('accessToken', res.data.accessToken);
        navigation.push('hotelcreate')
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const handleLoginTest = async (data: FieldValues) => {
    //const url:string = isRelease ? "http://localhost:8080" : "https://gingerhotel-server.site"
    axios
      .post(`http://localhost:8080/auth/test`, {
        socialId: data.socialId,
        vendor: "NAVER",
      })
      .then((res) => {
        console.log(res);
        AsyncStorage.setItem('isLogin', "true");
        AsyncStorage.setItem('accessToken', res.data.accessToken);
        navigation.push('hotelcreate')
      })
      .catch((err) => {
        console.log(err);
      });

  };


  async function handleEffect() {
    //const user = await getLocalUser();
    //console.log("user", user);
    //if (!user) {
      if (response?.type === "success") {
        // setToken(response.authentication.accessToken);
       // getUserInfo(response.authentication.accessToken);
       console.log("succ");
      }
    // } else {
    //   setUserInfo(user);
    //   console.log("loaded locally");
    // }
  }

    const loginWithGoogle = () => {
      //const a:string = response.authentication?.accessToken;
    }

    // Google 로그인 처리하는 함수
    /*const handleSignInWithGoogle = async () => {
      const user = await AsyncStorage.getItem("accessToken");
      if (!user) {
        if (response?.type === "success") {
          // 인증 요청에 대한 응답이 성공이면, 토큰을 이용하여 유저 정보를 가져옴.
          // await getUserInfo(response.authentication?.accessToken);
          AsyncStorage.setItem('isLogin', "true");
          AsyncStorage.setItem('accessToken', response.data.accessToken);
          navigation.push('hotelcreate')
        }
      } else {
        // 유저 정보가 이미 있으면, 유저 정보를 가져옴.
        setUserInfo(JSON.parse(user));
      }
    };*/
  
    const handleLogout = async () => {
      await AsyncStorage.removeItem("@user");
      setUserInfo(null);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.desc}>진저호텔에서 보내는 25일간의 휴일</Text>
      <Text style={styles.title}>진저호텔</Text>
      {Platform.OS === "ios" || Platform.OS === "android" ? (
        <WithLocalSvg width={280} asset={SVG} />
      ) : (
        <Image source={SVG} style={styles.hotel_img} />
      )}

      <View style={styles.social_btn_group}>
        <SocialButton name={"apple"} />
        <SocialButton name={"google"} />
        <SocialButton name={"kakao"} />
        <SocialButton name={"naver"} />
      </View>



      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{
          width:40,
          height:40,
          borderColor : "#000",
        }}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            
            const response = await axios.post(
              'http://127.0.0.1:8080/auth/apple',
              {
                token: credential.identityToken,
              }
            );

            AsyncStorage.setItem('isLogin', "true");
            AsyncStorage.setItem('accessToken', response.data.accessToken);
            navigation.push('hotelcreate')

          } catch (e) {
            /*if (e.code === 'ERR_REQUEST_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }*/
          }
        }}
      />
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      <Button title="logout" onPress={() => handleLogout()} />

      <TextInput
        placeholder="login test"
        onChangeText={(text) => setValue("socialId", text)}
      />
      <Button title="운영로그인 테스트" onPress={handleSubmit(handleLoginProd)} />
      <Button title="로컬로그인 테스트" onPress={handleSubmit(handleLoginTest)} />

      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
  desc: { fontSize: 12, fontWeight: "400", color: "black" },
  title: { fontSize: 60, fontWeight: "500", color: "black" },
  hotel_img: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
  social_btn_group: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around",
  },
  social_btn: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
