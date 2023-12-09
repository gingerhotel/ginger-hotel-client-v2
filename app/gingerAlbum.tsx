import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../constants/Colors";
import GingermanCard from "../components/gingermanCard";
import Header from "../components/appHeader";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useSegments } from "expo-router";
import { useQuery } from "react-query";
import { getHotel } from "../api/hotelApi";
import { hotelIdState } from "../atom/letterAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Text } from "../components/themed";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_URL } from "../api/url";
import LoginModal from "../components/Modal/loginModal";

const bellboy = require("../assets/gingerman/Album_Ginger/a_bellboy.png");
const bellboy2 = require("../assets/gingerman/Modal_Ginger/g_bellboy.png");
const bellboy4 = require("../assets/gingerman/Album_Ginger/g_2_nutcracker.png");
const bellboy3 = require("../assets/gingerman/Modal_Ginger/g_2_nutcracker.png");
const bellboy5 = require("../assets/gingerman/Modal_Ginger/g_painter.png");
const bellboy6 = require("../assets/gingerman/Album_Ginger/a_painter.png");
const bellboy7 = require("../assets/gingerman/Modal_Ginger/quarterback.png");
const bellboy8 = require("../assets/gingerman/Album_Ginger/a_quarterback.png");
const bellboy9 = require("../assets/gingerman/Modal_Ginger/modal_topgun.png");
const bellboy10 = require("../assets/gingerman/Album_Ginger/album_topgun.png");
const bellboy11 = require("../assets/gingerman/Modal_Ginger/modal_diva.png");
const bellboy12 = require("../assets/gingerman/Album_Ginger/album_diva.png");
const bellboy13 = require("../assets/gingerman/Modal_Ginger/modal_ch.png");
const bellboy14 = require("../assets/gingerman/Album_Ginger/album_ch.png");
const bellboy15 = require("../assets/gingerman/Modal_Ginger/modal_stu.png");
const bellboy16 = require("../assets/gingerman/Album_Ginger/album_stu.png");
const bellboy17 = require("../assets/gingerman/Modal_Ginger/modal_good.png");
const bellboy18 = require("../assets/gingerman/Album_Ginger/album_good.png");
const bellboy19 = require("../assets/gingerman/Modal_Ginger/modal_explore.png");
const bellboy20 = require("../assets/gingerman/Album_Ginger/album_explore.png");

const GingerAlbum = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [hotelId, setHotelId] = useRecoilState<string | string[]>(hotelIdState);
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  const [info, setInfo] = useState<any>([]);

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  const checkLogin = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      const response = await axios.get(`${AUTH_URL}`);
      return response.data;
    } catch (err: any) {
      // console.log(err?.response?.data?.errorMessage);
      setLoginModalVisible(true);
    }
  };

  const segments = useSegments();
  useEffect(() => {
    const isPath = segments[1] === "gingerAlbum";
    if (isPath) {
      checkLogin();
    }
  }, [segments]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const handleHotelData = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios
        .get(`${BASE_URL}/hotel/${hotelId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          // console.log(res);
          const HotelWindowsData = res.data.hotelWindows;
          setInfo(HotelWindowsData);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    handleHotelData();
  }, []);

  useEffect(() => {}, [info]);
  // console.log(info);

  return (
    <>
      <Header title="진저맨 앨범" disabledIcon={false} />
      <ScrollView>
        <View style={styles.containter}>
          <View style={styles.card_container}>
            <GingermanCard
              name="벨보이 진저맨"
              date="12/01"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={`올해도 진저호텔을 찾아왔네?\n호텔에서의 추억 만큼은 확실히 책임지겠어!\n리모델링된 진저호텔 좀 구경하라구~`}
              isOpened={info[`2023-12-01`]?.isOpen}
            />
            <GingermanCard
              name="병정 진저맨"
              date="12/02"
              pngImage={bellboy4}
              pngImage2={bellboy3}
              desc={`하하하, 2일차는 내가 장식하겠네!\n 호텔의 경비는 내가 보고 있을 테니\n 안심하고 휴가를 보내도록 하게! `}
              isOpened={info[`2023-12-02`]?.isOpen}
            />
            <GingermanCard
              name="화가 진저맨"
              date="12/03"
              pngImage={bellboy6}
              pngImage2={bellboy5}
              desc={`흠흠흠~ 진저호텔의 아름다운 외관에 놀랐다고?\n바로 이 몸의 작품이지~ 흠흠흠~\n크리에이티브 아티스트, 그게 바로 나야! `}
              isOpened={info[`2023-12-03`]?.isOpen}
            />
            <GingermanCard
              name="쿼터백 진저맨"
              date="12/04"
              pngImage={bellboy8}
              pngImage2={bellboy7}
              desc={`올해도 우리 진저하이스쿨이 무조건 1등이지!!\n왜냐고? 우리 팀은 최고니까!\n 우우우-! 하나 둘 셋 화이팅-!`}
              isOpened={info[`2023-12-04`]?.isOpen}
            />
            <GingermanCard
              name="파일럿 진저맨"
              date="12/05"
              pngImage={bellboy10}
              pngImage2={bellboy9}
              desc={`고공을 가르는 비행이란 참으로 매력적이지.\n마하의 속도를 느껴봤나?\n언제 한번 내 전투기를 구경시켜주지, 훗.`}
              isOpened={info[`2023-12-05`]?.isOpen}
            />
            <GingermanCard
              name="디바 진저맨"
              date="12/06"
              pngImage={bellboy12}
              pngImage2={bellboy11}
              desc={`안녕! 나는 디바 진저맨~\n내 공연은 언제나 매진이지~\n언제 한번 내 노래 들으러 오라구~`}
              isOpened={info[`2023-12-06`]?.isOpen}
            />
            <GingermanCard
              name="철학자 진저맨"
              date="12/07"
              pngImage={bellboy14}
              pngImage2={bellboy13}
              desc={`어이 자네~\n이따 아고라 광장에서 만나기로 했지?\n오늘은 아르케에 대해 논하니 기대하고 와도 좋아!`}
              isOpened={info[`2023-12-07`]?.isOpen}
            />
            <GingermanCard
              name="모범생 진저맨"
              date="12/08"
              pngImage={bellboy16}
              pngImage2={bellboy15}
              desc={`내가 제일 좋아하는 건\n나무 그늘 아래서 커피와 독서를 즐기는 거야.\n너는 어때?`}
              isOpened={info[`2023-12-08`]?.isOpen}
            />
            <GingermanCard
              name="멋쟁이 진저맨"
              date="12/09"
              pngImage={bellboy18}
              pngImage2={bellboy17}
              desc={`하~이 날 보러 진저호텔에 온 거야?\n후훗 보는 눈은 있어가지고~\n눈부신 내 멋짐에 반해버리면 안된다구~`}
              isOpened={info[`2023-12-09`]?.isOpen}
            />
            <GingermanCard
              name="탐험가 진저맨"
              date="12/10"
              pngImage={bellboy20}
              pngImage2={bellboy19}
              desc={`흠~ 거의 다 온 것 같네!\n조금만 더 가면 내가 찾는 보물이 있어.\n지도와 배낭만 있다면 어디든 탐험 가능이지!`}
              isOpened={info[`2023-12-10`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/11"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-11`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/12"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-12`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/13"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-13`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/14"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-14`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/15"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-15`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/16"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-16`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/17"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-17`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/18"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-18`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/19"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-19`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/20"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-20`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/21"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-21`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/22"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-22`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/23"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-23`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/24"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-24`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/25"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-25`]?.isOpen}
            />
          </View>
        </View>
        <LoginModal
          height={300}
          visible={loginModalVisible}
          onClose={closeLoginModal}
          name="로그인"
          desc=""
          closeDisable={true}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  containter: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.greyblack,
    paddingVertical: 33,
    flex: 1,
  },
  card_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 360,
  },
  CardGinger_Style: {
    width: 72,
    height: 95,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    paddingTop: 34,
    paddingBottom: 33,
    backgroundColor: colors.greyblack,
  },
  header_text: {
    fontFamily: "SOYOMaple-Regular",
    fontSize: 18,
    color: colors.Whiteyello,
    width: 92,
  },
});

export default GingerAlbum;
