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
import {
  router,
  useLocalSearchParams,
  useNavigation,
  useSegments,
} from "expo-router";
const ginger = require("../../../assets/gingerman/Modal_Ginger/g_bellboy.png");
const album = require("../../../assets/icon/i_album.svg");
const share = require("../../../assets/icon/share_FILL0_wght400_GRAD0_opsz244.svg");
const icon: any = require("../../../assets/icon/i_check_green.svg");
const plus = require("../../../assets/icon/i_plus_2.svg");

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
import SnowfallContainer from "../../../components/snow/snowfallContainer";
import Snowfall from "react-snowfall";
import { addVillage } from "../../../api/villageApi";

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
  const [villageModal, setVillageModal] = useState<boolean>(false);

  const [newLetterCount, setNewLetterCount] =
    useRecoilState(newLetterCountState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handelAddVillage = async () => {
    setVillageModal(false);
    try {
      const res = await addVillage(String(id));
      if (res?.success) {
        Toast.show({
          type: "iconToast",
          text1: "내 빌리지에 추가되었습니다!",
          position: "top",
        });
      }
    } catch (err: any) {
      Toast.show({
        type: "iconToast",
        text1: err?.response?.data?.errorMessage,
        position: "top",
      });
    }
  };
  // useEffect(() => {
  //   // 페이지가 전환될 때마다 실행
  //   navigation.setOptions({ headerShown: false }); // 이 부분이 필요한지 확인하세요.

  //   // 현재 URL과 목표 URL이 다른 경우에만 새로 고침
  //   if (
  //     window.location.pathname !==
  //     `/hotel/${id === undefined || id === "undefined" || !id ? 1 : id}`
  //   ) {
  //     window.location.href = `/hotel/${
  //       id === undefined || id === "undefined" || !id ? 1 : id
  //     }`;
  //   }
  // }, [id, navigation]);

  const segments = useSegments();
  useEffect(() => {
    const isHotelPath = segments[1] === "hotel";
    if (isHotelPath) {
      refetch();
    }
  }, [segments]);
  const { data, status, error, refetch } = useQuery(
    "loadHotel",
    async () => await getHotel(id as string),
    {
      refetchOnWindowFocus: false,
      onError: (e) => {
        console.log(`useQuery error : ${e}`);
      },
    }
  );

  const [hotelWindow, setHotelWindow] = useState(data?.hotelWindows);

  useEffect(() => {
    if (data) {
      setHotelWindow(data.hotelWindows);
    }
  }, [data]);

  console.log(data);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  } else {
    setNewLetterCount(data?.todayReceivedLetterCount);
    setHotelId(id as string);
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: colors.greyblack }}>
        <SnowfallContainer>
          <Snowfall color="white" snowflakeCount={50} />
        </SnowfallContainer>
        <Header
          isOwner={data.isOwner}
          keyCount={data?.keyCount}
          feekCount={data?.feekCount}
        />
        <View style={styles.container}>
          <ProgressBarView style={{ width: 230 }}>
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
          <View style={{ backgroundColor: "transparent" }}>
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
          <View style={{ position: "relative" }}>
            <Image
              source={require("../../../assets/gif/smoke.gif")}
              style={styles.gifImage}
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
                    url="mailbox/1"
                    is_disable={data?.todayLetterCnt >= 5}
                  />
                  <SvgImg
                    width={40}
                    height={40}
                    url={album}
                    onPress={() => router.push("/gingerAlbum")}
                  />
                </View>

                <View style={styles.hotel_today}>
                  <Buttons
                    title="내 호텔 공유하기"
                    color="gray_700"
                    width={350}
                    callback={() => {
                      // web only
                      let nowUrl = window.location.href;
                      navigator.clipboard.writeText(nowUrl);
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
                {!data?.isLoginMember ? (
                  <View style={styles.hotel_today}>
                    <Buttons
                      title="내 호텔 만들기"
                      url="letter"
                      color="green"
                      width={350}
                      callback={() => setLoginModalVisible(true)}
                    />
                  </View>
                ) : (
                  <>
                    <View style={styles.hotel_today}>
                      <Buttons
                        title="내 호텔로 가기"
                        url="letter"
                        color="green"
                        width={350}
                        callback={() => setLoginModalVisible(true)}
                      />
                    </View>
                    <View style={styles.hotel_today}>
                      <Buttons
                        title="내 빌리지에 추가"
                        color="gray_700"
                        width={350}
                        callback={() => {
                          setVillageModal(true);
                        }}
                        icon={plus}
                      />
                    </View>
                  </>
                )}
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
        <CenterModal
          height={180}
          visible={villageModal}
          onClose={() => setVillageModal(false)}
          title="내 빌리지에 추가하시겠습니까?"
          desc="빌리지에 추가하면 링크 없이도
          친구 진저호텔에 방문할 수 있어요."
          btn_text="추가하기"
          callback={handelAddVillage}
        />
        <LoginModal
          height={300}
          visible={loginModalVisible}
          onClose={closeLoginModal}
          name="로그인"
          desc=""
        />
        <KakaoAdFit />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
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
    height: 52
  },
  hotel_today2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyblack,
    gap: 10,
    height: 104,
    marginTop: 60,
  },
  gifImage: {
    width: 100,
    height: 100,
    position: "absolute",
    opacity: 0.4,
    right: -160,
    top: -596,
  },
});
