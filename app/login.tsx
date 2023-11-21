import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Image, View, Platform, Text, Button } from "react-native";
// import { MonoText } from "../components/styledText";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { WithLocalSvg } from "react-native-svg";
import SocialButton from "../components/socialButton";

import axios from 'axios';

//import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";

const SVG = require("../assets/images/StartHotel.svg");
const [userInfo, setUserInfo] = React.useState(null);

export default function Login({ navigation }: any) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "251638133705-q41nmhb0a21vrbj2vp5rmnn8n1bv2tjh.apps.googleusercontent.com",
    iosClientId: "251638133705-sp0utm65q7m50m68g788ftj9rpaa08fr.apps.googleusercontent.com",
  });

  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    handleEffect();
  }, [response, token]);

    // Google 로그인 처리하는 함수
    const handleSignInWithGoogle = async () => {
      const user = await AsyncStorage.getItem("@user");
      if (!user) {
        if (response?.type === "success") {
          // 인증 요청에 대한 응답이 성공이면, 토큰을 이용하여 유저 정보를 가져옴.
          // await getUserInfo(response.authentication?.accessToken);
        }
      } else {
        // 유저 정보가 이미 있으면, 유저 정보를 가져옴.
        setUserInfo(JSON.parse(user));
      }
    };

    const getUserInfo = async (token:string) => {
      if (!token) return;
      try {
        const response = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        const user = await response.json();
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
      } catch (error) {
        // Add your own error handler here
      }
    };
  
    async function handleEffect() {
      const user = await getLocalUser();
      console.log("user", user);
      if (!user) {
        if (response?.type === "success") {
          // setToken(response.authentication.accessToken);
          //getUserInfo(response.authentication.accessToken);
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

      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      <Button title="logout" onPress={() => handleLogout()} />



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
