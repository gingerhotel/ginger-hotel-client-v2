import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "../../components/themed";
import Header from "../../components/header";
import { MonoText } from "../../components/styledText";
import React from "react";
import Buttons from "../../components/buttons";
import Toast from "react-native-toast-message";
import { SvgImg } from "../../components/svgImg";
const SVG = require("../../assets/images/StartHotel.svg");

export default function Hotel({ navigation }: any) {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <MonoText style={styles.hotel_name}>진저님의 진저호텔</MonoText>
        <MonoText style={styles.hotel_desc}>
          진저의 호텔에 오신 여러분 환영합니다~!
        </MonoText>
        <SvgImg
          onPress={() => navigation.navigate("hotelcreate")}
          a_width={300}
          a_height={500}
          url={SVG}
          width={300}
          height={400}
        />
        <Buttons
          navigation={navigation}
          url={"mailbox"}
          title="호텔 편지함"
          color="green"
        />
        <Buttons
          navigation={navigation}
          url={"letter"}
          title="편지 보내기"
          color="neongreen"
        />
        <Buttons
          navigation={navigation}
          url={"login"}
          title="진저맨 앨범"
          color="darkgray"
        />
        <Buttons
          title="호텔 링크 복사하기"
          color="gray"
          callback={() => {
            Toast.show({
              type: "basicToast",
              text1: "링크가 복사되었습니다!",
              position: "bottom",
            });
          }}
        />
        <Buttons
          navigation={navigation}
          url={"login"}
          title="로그인"
          color="green"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
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
    color: "white",
    marginTop: 35,
    fontSize: 25,
  },
  hotel_desc: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
});
