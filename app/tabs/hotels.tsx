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
import React, { useState } from "react";
import Buttons from "../../components/buttons";
import Toast from "react-native-toast-message";
import { SvgImg } from "../../components/svgImg";
import { WithLocalSvg } from "react-native-svg";
import ProgressBar from "../../components/progressBar";
import { ProgressBarView } from "../../style/progressBarStyled";
import GingerModal from "../../components/gingerModal";
const SVG = require("../../assets/images/StartHotel.svg");
const IC_SVG = require("../../assets/icon/ic_ginger.svg");
const ginger = require("../../assets/gingerman/g_bellboy.png");
import Share, {Social} from 'react-native-share';

export default function Hotel({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ProgressBarView>
          <MonoText style={styles.hotel_desc}>도착한 편지</MonoText>
          <ProgressBar />
        </ProgressBarView>
        <MonoText style={styles.hotel_name}>진저님의 진저호텔</MonoText>
        <MonoText style={styles.hotel_desc}>
          진저의 호텔에 오신 여러분 환영합니다~!
        </MonoText>
        <SvgImg
          width={400}
          height={400}
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
              <SvgImg
                width={40}
                height={40}
                onPress={() => setModalVisible(true)}
                url={IC_SVG}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.hotel_today}>
            <Buttons
              title="내 호텔 공유하기"
              color="grey"
              width={350}
              callback={() => {
                Toast.show({
                  type: "basicToast",
                  text1: "링크가 복사되었습니다!",
                  position: "bottom",
                });
                
              Share.shareSingle({
                social: Social.InstagramStories,
                appId: "440384258310203",
                // backgroundImage: "배경으로 지정할 이미지의 URL",
                // backgroundVideo: "배경으로 지정할 동영상의 URL",
                // stickerImage: "sticker 형식으로(작게) 공유할 이미지의 URL", 
                backgroundBottomColor: " #837DF4",
                backgroundTopColor: "#906df4",
              });
              }}
            />
          </View>
          <View style={styles.hotel_today}>
            <Buttons
              navigation={navigation}
              url={"login"}
              title="임시 로그인 버튼"
              color="green"
              width={350}
            />
          </View>
          <View style={styles.hotel_today}>
            <Buttons
              navigation={navigation}
              url={"letter"}
              title="편지보내기"
              color="green"
              width={350}
            />
          </View>
        </View>
      </View>

      <GingerModal
        height={530}
        visible={modalVisible}
        onClose={closeModal}
        name="벨보이 진저맨"
        desc="진저맨 설명 진저맨 설명 벨보이 진저맨 어쩌고 저쩌군 "
        img={ginger}
        navigation={navigation}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
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
  hotel_name: {
    color: "white",
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
