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
import { WithLocalSvg } from "react-native-svg";
import ProgressBar from "../../components/progressBar";
import { ProgressBarView } from "../../style/progressBarStyled";
const SVG = require("../../assets/images/StartHotel.svg");
const IC_SVG = require("../../assets/icon/ic_ginger.svg");

export default function Hotel({ navigation }: any) {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ProgressBarView>
          <MonoText style={styles.hotel_desc}>
            도착한 편지
          </MonoText>
          <ProgressBar />
        </ProgressBarView>
        <MonoText style={styles.hotel_name}>진저님의 진저호텔</MonoText>
        <MonoText style={styles.hotel_desc}>
          진저의 호텔에 오신 여러분 환영합니다~!
        </MonoText>
        <SvgImg
          onPress={() => navigation.navigate("hotelcreate")}
          url={SVG}
        />
        <View style={styles.hotel_today_container}>
          <View style={styles.hotel_today}>
            <Buttons
              navigation={navigation}
              url={"mailbox"}
              title="오늘의 편지함 보기"
              color="green"
              width={288}
            />
            <TouchableOpacity>
              <SvgImg url={IC_SVG}/>
            </TouchableOpacity>
          </View>
          <View style={styles.hotel_today}>
            <Buttons
              title="내 호텔 공유하기"
              color="gray_700"
              width={350}
              callback={() => {
                Toast.show({
                  type: "basicToast",
                  text1: "링크가 복사되었습니다!",
                  position: "bottom",
                });
              }}
            />
          </View>
        </View>
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
    marginTop: 35,
    fontSize: 25,
  },
  hotel_desc: {
    display: 'flex',
    fontSize: 17,
  },
  hotel_today_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    gap: 15,
    marginBottom: 30,
  },
  hotel_today: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    gap: 10,
    height: 52
  }
});
