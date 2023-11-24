import React, { useState } from "react";
import { View, StyleSheet, Modal, Pressable, Text, Image } from "react-native";
import { colors } from "../../constants/Colors";
import { typography } from "../../constants/Typo";
import { MonoText } from "../styledText";
import { router } from "expo-router";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SocialButton from "../socialButton";
import axios from "axios";
import { useMutation } from "react-query";
import { authGoogle } from "../../api/authApi";

WebBrowser.maybeCompleteAuthSession();

type Props = {
  onClose?: any;
  visible?: boolean;
  height?: number | any;
  name: string;
  desc: string;
  img: string | any;
};

const LoginModal = ({
  height,
  visible,
  onClose,
  name,
  img,
  desc,
}: Props) => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "251638133705-q41nmhb0a21vrbj2vp5rmnn8n1bv2tjh.apps.googleusercontent.com",
    iosClientId: "251638133705-sp0utm65q7m50m68g788ftj9rpaa08fr.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    handleEffect();
  }, [response]);

  async function handleEffect() {
    const user = false;
    //const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        googleAuth(response.authentication?.accessToken as string);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const mutation = useMutation( authGoogle,
    {
      onSuccess: (res) => {
        AsyncStorage.setItem('accessToken', res.data.accessToken);
        if (res.status == 200) {
          router.push('/create');
        } else if (res.status == 201) {
          router.push(`/hotel/${res.data.hotelid}`); 
          // need to get hotelid
        }
      },
      onError: (data) => {
        console.log(data);
      }
    }
  );

  const googleAuth = async (token:string) => {
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
      })
    } catch (e){
      console.log(e);
    }
  }

  const setModalVisible = () => {
    promptAsync();
    onClose(); // 부모 컴포넌트에 닫기 이벤트를 전달
  };
  const close = () => {
    onClose(); 
  };



  
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
          <Text style={[styles(height).modal_desc, typography.display1_basic]}>
            {name}
          </Text>


          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.grey700,
            }}
          ></View>
            
          <View style={styles(height).button_wrapper}>
            <Pressable
              style={[styles(height).button, styles(height).buttonOpen]}
              onPress={() => setModalVisible()}
            >
              <MonoText style={styles(height).textStyle}>
                구글 로그인
              </MonoText>
            </Pressable>
          </View>
          <View style={styles(height).button_wrapper}>
            <Pressable
              style={[styles(height).button, styles(height).buttonOpen]}
              onPress={() => close()}
            >
              <MonoText style={styles(height).textStyle}>
                취소
              </MonoText>
            </Pressable>
          </View>
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
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: colors.grey900,
      borderRadius: 10,
      width: "80%",
      padding: 28,
      height,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
      borderRadius: 10,
      padding: 13,
      paddingLeft: 10,
      paddingRight: 10,
      elevation: 2,
      width: "100%",
    },
    buttonOpen: {
      backgroundColor: colors.green600,
      color: colors.Whiteyello,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      flex: 1,
    },
    modal_title: {
      marginBottom: 6,
      fontSize: 16,
      textAlign: "center",
      color: colors.Whiteyello,
    },
    modal_desc: {
      fontSize: 12,
      marginBottom: 20,
      color: colors.Whiteyello,
      textAlign: "center",
      lineHeight: 21,
      fontWeight: "700",
    },
    button_wrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
    },
    social_btn_group: {
      flexDirection: "row",
      width: 300,
      justifyContent: "space-around",
    },
  });

export default LoginModal;
