import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import { Text, View } from "../../components/Themed";
import Header from "../../components/header";
import { MonoText } from "../../components/styledText";
import React from "react";
import { WithLocalSvg } from "react-native-svg";
import Buttons from "../../components/buttons";
import Toast from "react-native-toast-message";
const SVG = require("../../assets/images/StartHotel.svg");

export default function TabTwoScreen({ navigation }: any) {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <MonoText style={styles.hotel_name}>진저님의 진저호텔</MonoText>
        <MonoText style={styles.hotel_desc}>
          진저의 호텔에 오신 여러분 환영합니다~!
        </MonoText>
        {Platform.OS === "ios" || Platform.OS === "android" ? (
          <WithLocalSvg width={280} asset={SVG} />
        ) : (
          <Image source={SVG} style={styles.hotel_img} />
        )}
        <Buttons
          navigation={navigation}
          url={"mailbox"}
          title="호텔 편지함"
          color="red"
        />
        <Buttons
          navigation={navigation}
          url={"letter"}
          title="편지 보내기"
          color="green"
        />
        <Buttons
          navigation={navigation}
          url={"login"}
          title="진저맨 앨범"
          color="green"
        />
        <Buttons
          title="호텔 링크 복사하기"
          color="white"
          callback={() => {
            Toast.show({
              type: "basicToast",
              text1: "링크가 복사되었습니다!",
              position: "bottom",
            });
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  hotel_img: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  text: {
    fontFamily: "Pretendard-Regular",
  },
  hotel_name: {
    marginTop: 35,
    fontSize: 25,
  },
  hotel_desc: {
    fontSize: 15,
    marginTop: 10,
  },
});
