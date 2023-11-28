import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "../../../components/themed";
import Header from "../../../components/header";
import { MonoText } from "../../../components/styledText";
import React, { useEffect, useState } from "react";
import Buttons from "../../../components/buttons";
import Toast from "react-native-toast-message";
import { SvgImg } from "../../../components/svgImg";
import { ProgressBarView } from "../../../style/progressBarStyled";
import GingerModal from "../../../components/gingerModal";
import { colors } from "../../../constants/Colors";
import { typography } from "../../../constants/Typo";
import { useQuery } from "react-query";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
const ginger = require("../../../assets/gingerman/g_bellboy.png");
const album = require("../../../assets/icon/i_album.svg");
const share = require("../../../assets/icon/share_FILL0_wght400_GRAD0_opsz244.svg");
const icon: any = require("../../../assets/icon/i_check_green.svg");

import { myDate } from "../../../api/myApi";
import { useRecoilState, useSetRecoilState } from "recoil";
import { hotelIdState, newLetterCountState } from "../../../atom/letterAtom";
import { newLetterData } from "../../../api/letterApi";
import { getHotel } from "../../../api/hotelApi";
import { Hotel } from "../../../api/interface";
import ProgressBar from "../../../components/progressBar";
import CenterModal from "../../../components/centerModal";
import LoginModal from "../../../components/Modal/\bloginModal";
import CustomCompleteUserHotel from "../../../components/customCompletedUserHotel";
import KakaoAdFit from "../../../advertisement/KakaoAdFit";

export default function HotelComp() {
  // const { data, isLoading } = useQuery("myInfo", async () => await myInfo());
  const { id } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [hotel, setHotel] = useState<Hotel>();
  const [todayLetterCnt, setTodayLetterCnt] = useState<Number>();
  const [goalCnt, setGoalCnt] = useState<Number>(5);
  const setHotelId = useSetRecoilState<string | string[]>(hotelIdState);
  const [open, setOpen] = useState(true);
  const navigation = useNavigation();
  const [newLetterCount, setNewLetterCount] =
    useRecoilState(newLetterCountState);
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const { data, status, error } = useQuery(
    "loadHotel",
    async () => await getHotel(id as string),
    {
      refetchOnWindowFocus : false,
      onError: (e) => {
        console.log(`useQuery error : ${e}`);
      },
    }
  );
  console.log(data);
  if (status === "loading") {
    return <Text>Loading...</Text>;
  } else {
    setNewLetterCount(data?.todayReceivedLetterCount);
    setHotelId(id);
  }
  return (
    <ScrollView>
      <Header
        isOwner={data.isOwner}
        keyCount={data?.keyCount}
        feekCount={data?.feekCount}
      />
      <View style={styles.container}>
        <ProgressBarView>
          <MonoText style={styles.hotel_desc2}>도착한 편지</MonoText>
          <ProgressBar
            todayLetterCnt={data?.todayReceivedLetterCount}
            goalCnt={goalCnt}
          />
        </ProgressBarView>
        <Text style={styles.hotel_name}>
          {data?.hotel?.nickname}님의 진저호텔
        </Text>
        <Text style={styles.hotel_desc}>{data?.hotel?.description}</Text>

        {/* <Link href={"/create"}> */}
        <View style={{ backgroundColor: colors.greyblack }}>
          <CustomCompleteUserHotel
            window={data.hotelWindows}
            // onPress={handleClickWindow}
            wallColor={data?.hotel?.bodyColor}
            structColor={data?.hotel?.structColor}
            buildingDecorator={data?.hotel?.buildingDecorator}
            is_border={false}
            is_front_bg={true}
            gardenDecorator={data?.hotel?.gardenDecorator}
            background={data?.hotel?.background}
            window_v={data?.hotel?.windowDecorator}
          />
        </View>
        {/* </Link> */}
        <View style={styles.hotel_today_container}>
          {data.isOwner ? (
            <>
              <View style={styles.hotel_today}>
                <Buttons
                  title="오늘의 편지함 보기"
                  color="green"
                  width={288}
                  url="mailbox"
                  is_disable={!data?.canReceiveLetterToday}
                />
                <TouchableOpacity>
                  <SvgImg
                    width={40}
                    height={40}
                    url={album}
                    onPress={() => router.push("/gingerAlbum")}
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
                      type: "iconToast",
                      text1: "링크가 복사되었습니다!",
                      position: "bottom",
                      props: { icon },
                    });
                  }}
                  icon={share}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.hotel_today}>
                <Buttons
                  title="편지 보내기"
                  url={`letter/${id}`}
                  color="green"
                  width={350}
                  callback={() =>
                    !data?.isLoginMember ? setLoginModalVisible(true) : {}
                  }
                  auth={data?.isLoginMember}
                />
              </View>
              <View style={styles.hotel_today}>
                <Buttons
                  title="빌리지 추가하기"
                  url="letter"
                  color="green"
                  width={350}
                  callback={() =>
                    !data?.isLoginMember ? setLoginModalVisible(true) : {}
                  }
                  auth={data?.isLoginMember}
                />
              </View>
            </>
          )}
        </View>
      </View>

      <GingerModal
        height={530}
        visible={modalVisible}
        onClose={closeModal}
        name="벨보이 진저맨"
        desc="진저맨 설명 진저맨 설명 벨보이 진저맨 어쩌고 저쩌군 "
        img={ginger}
      />
      <LoginModal
        height={300}
        visible={loginModalVisible}
        onClose={closeLoginModal}
        name="로그인"
        desc=""
      />
      <KakaoAdFit />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: colors.greyblack,
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
    backgroundColor: colors.greyblack,
    gap: 12,
    marginBottom: 30,
    marginTop: 12,
  },
  hotel_today: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyblack,

    gap: 10,
    height: 52,
  },
});
