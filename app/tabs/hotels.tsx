import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "../../components/themed";
import Header from "../../components/header";
import { MonoText } from "../../components/styledText";
import React, { useEffect, useState } from "react";
import Buttons from "../../components/buttons";
import Toast from "react-native-toast-message";
import { SvgImg } from "../../components/svgImg";
import ProgressBar from "../../components/progressBar";
import { ProgressBarView } from "../../style/progressBarStyled";
import GingerModal from "../../components/gingerModal";
import { colors } from "../../constants/Colors";
import { typography } from "../../constants/Typo";
import { myDate } from "../../api/myApi";
import { useSetRecoilState } from "recoil";
import { hotelIdState } from "../../atom/letterAtom";
import { newLetterData } from "../../api/letterApi";

const SVG = require("../../assets/images/StartHotel.svg");
const ginger = require("../../assets/gingerman/g_bellboy.png");
const album = require("../../assets/icon/i_album.svg");
const share = require("../../assets/icon/share_FILL0_wght400_GRAD0_opsz244.svg");

export default function Hotel({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const setHotelId = useSetRecoilState<number>(hotelIdState);
  const [open, setOpen] = useState(true);
  console.log()
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const handleUserData = async () => {
      const { hotel }: any = await myDate();
      setHotelId(hotel?.id);
      if (await newLetterData({ hotelId: hotel?.id })) {
        setOpen(false);
      }
    };
    handleUserData();
  }, []);
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ProgressBarView>
          <MonoText style={styles.hotel_desc2}>도착한 편지</MonoText>
          <ProgressBar />
        </ProgressBarView>
        <Text style={styles.hotel_name}>진저님의 진저호텔</Text>
        <Text style={styles.hotel_desc}>
          진저의 호텔에 오신 여러분 환영합니다~!
        </Text>
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
              is_disable={open}
            />
            <TouchableOpacity>
              <SvgImg
                width={40}
                height={40}
                onPress={() => setModalVisible(true)}
                url={album}
              />
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
              icon={share}
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
    marginTop: 14,
    fontSize: typography.display1_basic.fontSize,
    fontFamily: typography.display1_basic.fontFamily,
    fontWeight: "700",
  },
  hotel_desc: {
    display: "flex",
    fontSize: 16,
    color: colors.Whiteyello,
    marginTop: 8,
  },
  hotel_desc2: {
    display: "flex",
    fontSize: 14,
    color: colors.grey500,
  },
  hotel_today_container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    gap: 12,
    marginBottom: 30,
    marginTop: 12,
  },
  hotel_today: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    gap: 10,
    height: 52,
  },
});
