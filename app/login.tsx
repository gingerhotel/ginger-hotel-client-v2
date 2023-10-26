import React from "react";
import { StyleSheet, Image, View, Platform, Text } from "react-native";
// import { MonoText } from "../components/styledText";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { WithLocalSvg } from "react-native-svg";
import SocialButton from "../components/socialButton";

const SVG = require("../assets/images/StartHotel.svg");

export default function Login({ navigation }: any) {
  let clientId =
    "983622613978-aj2js3e1qb9qq1jtdueu7ic47o8fgg2l.apps.googleusercontent.com";

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
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          width={1000}
          type={"icon"}
          shape="circle"
          onSuccess={(res) => {
            console.log(res);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        {/* // Todo: Google Custom Design link :
        https://velog.io/@miyoni/google-social-login */}
      </GoogleOAuthProvider>
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
