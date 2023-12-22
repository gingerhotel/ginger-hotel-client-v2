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
const bellboy21 = require("../assets/gingerman/Modal_Ginger/modal_smell.png");
const bellboy22 = require("../assets/gingerman/Album_Ginger/album_smell.png");
const bellboy23 = require("../assets/gingerman/Modal_Ginger/modal_boss.png");
const bellboy24 = require("../assets/gingerman/Album_Ginger/album_boss.png");
const bellboy25 = require("../assets/gingerman/Modal_Ginger/modal_drawing.png");
const bellboy26 = require("../assets/gingerman/Album_Ginger/album_drawing.png");
const bellboy27 = require("../assets/gingerman/Modal_Ginger/modal_developer.png");
const bellboy28 = require("../assets/gingerman/Album_Ginger/album_developer.png");
const bellboy29 = require("../assets/gingerman/Modal_Ginger/modal_science.png");
const bellboy30 = require("../assets/gingerman/Album_Ginger/album_science.png");
const bellboy31 = require("../assets/gingerman/Modal_Ginger/modal_princess.png");
const bellboy32 = require("../assets/gingerman/Album_Ginger/album_princess.png");
const bellboy33 = require("../assets/gingerman/Modal_Ginger/modal_health.png");
const bellboy34 = require("../assets/gingerman/Album_Ginger/album_health.png");
const bellboy35 = require("../assets/gingerman/Modal_Ginger/modal_climer.png");
const bellboy36 = require("../assets/gingerman/Album_Ginger/album_climer.png");
const bellboy37 = require("../assets/gingerman/Modal_Ginger/modal_coconut.png");
const bellboy38 = require("../assets/gingerman/Album_Ginger/album_coconut.png");
const bellboy39 = require("../assets/gingerman/Modal_Ginger/modal_camera.png");
const bellboy40 = require("../assets/gingerman/Album_Ginger/modal_camera.png");
const bellboy41 = require("../assets/gingerman/Modal_Ginger/modal_flower.png");
const bellboy42 = require("../assets/gingerman/Album_Ginger/album_flower.png");
const bellboy43 = require("../assets/gingerman/Modal_Ginger/modal_ghost.png");
const bellboy44 = require("../assets/gingerman/Album_Ginger/album_ghost.png");
const bellboy45 = require("../assets/gingerman/Modal_Ginger/modal_spy.png");
const bellboy46 = require("../assets/gingerman/Album_Ginger/album_spy.png");

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
              isOpened={info[`2023-12-01`]?.hasCookie}
            />
            <GingermanCard
              name="병정 진저맨"
              date="12/02"
              pngImage={bellboy4}
              pngImage2={bellboy3}
              desc={`하하하, 2일차는 내가 장식하겠네!\n 호텔의 경비는 내가 보고 있을 테니\n 안심하고 휴가를 보내도록 하게! `}
              isOpened={info[`2023-12-02`]?.hasCookie}
            />
            <GingermanCard
              name="화가 진저맨"
              date="12/03"
              pngImage={bellboy6}
              pngImage2={bellboy5}
              desc={`흠흠흠~ 진저호텔의 아름다운 외관에 놀랐다고?\n바로 이 몸의 작품이지~ 흠흠흠~\n크리에이티브 아티스트, 그게 바로 나야! `}
              isOpened={info[`2023-12-03`]?.hasCookie}
            />
            <GingermanCard
              name="쿼터백 진저맨"
              date="12/04"
              pngImage={bellboy8}
              pngImage2={bellboy7}
              desc={`올해도 우리 진저하이스쿨이 무조건 1등이지!!\n왜냐고? 우리 팀은 최고니까!\n 우우우-! 하나 둘 셋 화이팅-!`}
              isOpened={info[`2023-12-04`]?.hasCookie}
            />
            <GingermanCard
              name="파일럿 진저맨"
              date="12/05"
              pngImage={bellboy10}
              pngImage2={bellboy9}
              desc={`고공을 가르는 비행이란 참으로 매력적이지.\n마하의 속도를 느껴봤나?\n언제 한번 내 전투기를 구경시켜주지, 훗.`}
              isOpened={info[`2023-12-05`]?.hasCookie}
            />
            <GingermanCard
              name="디바 진저맨"
              date="12/06"
              pngImage={bellboy12}
              pngImage2={bellboy11}
              desc={`안녕! 나는 디바 진저맨~\n내 공연은 언제나 매진이지~\n언제 한번 내 노래 들으러 오라구~`}
              isOpened={info[`2023-12-06`]?.hasCookie}
            />
            <GingermanCard
              name="철학자 진저맨"
              date="12/07"
              pngImage={bellboy14}
              pngImage2={bellboy13}
              desc={`어이 자네~\n이따 아고라 광장에서 만나기로 했지?\n오늘은 아르케에 대해 논하니 기대하고 와도 좋아!`}
              isOpened={info[`2023-12-07`]?.hasCookie}
            />
            <GingermanCard
              name="모범생 진저맨"
              date="12/08"
              pngImage={bellboy16}
              pngImage2={bellboy15}
              desc={`내가 제일 좋아하는 건\n나무 그늘 아래서 커피와 독서를 즐기는 거야.\n너는 어때?`}
              isOpened={info[`2023-12-08`]?.hasCookie}
            />
            <GingermanCard
              name="멋쟁이 진저맨"
              date="12/09"
              pngImage={bellboy18}
              pngImage2={bellboy17}
              desc={`하~이 날 보러 진저호텔에 온 거야?\n후훗 보는 눈은 있어가지고~\n눈부신 내 멋짐에 반해버리면 안된다구~`}
              isOpened={info[`2023-12-09`]?.hasCookie}
            />
            <GingermanCard
              name="탐험가 진저맨"
              date="12/10"
              pngImage={bellboy20}
              pngImage2={bellboy19}
              desc={`흠~ 거의 다 온 것 같네!\n조금만 더 가면 내가 찾는 보물이 있어.\n지도와 배낭만 있다면 어디든 탐험 가능이지!`}
              isOpened={info[`2023-12-10`]?.hasCookie}
            />
            <GingermanCard
              name="조향사 진저맨"
              date="12/11"
              pngImage={bellboy22}
              pngImage2={bellboy21}
              desc={`세상의 모든 것은 향기를 가지고 있어요.\n우리 모두에게도 향기가 배여있죠.\n당신의 향기는 무엇인가요?`}
              isOpened={info[`2023-12-11`]?.hasCookie}
            />
            <GingermanCard
              name="보스 진저맨"
              date="12/12"
              pngImage={bellboy24}
              pngImage2={bellboy23}
              desc={`최고가 되기 위해선 매일 달려야 해.\n그래야 정상에 머물 수 있어.\n성공은 내가 만드는 거야.`}
              isOpened={info[`2023-12-12`]?.hasCookie}
            />
            <GingermanCard
              name="낙서 진저맨"
              date="12/13"
              pngImage={bellboy26}
              pngImage2={bellboy25}
              desc={`안녕? 나는 벨보이 진저맨이야.\n첫번째 날에 나온 녀석은 가짜라구-!\n내가 더 멋있지 않아? 키키`}
              isOpened={info[`2023-12-13`]?.hasCookie}
            />
            <GingermanCard
              name="개발자 진저맨"
              date="12/14"
              pngImage={bellboy28}
              pngImage2={bellboy27}
              desc={`흠! 이 정도면 문제없지!\n난 모든 걸 구현해 내는 개발자니까.\n결과물이 벌써 기대되는걸?`}
              isOpened={info[`2023-12-14`]?.hasCookie}
            />
            <GingermanCard
              name="과학자 진저맨"
              date="12/15"
              pngImage={bellboy30}
              pngImage2={bellboy29}
              desc={`여기서 이 색깔이 나오면 안 되는데..\n용액이 부족했나? 잘못 넣은 건가?\n알쏭달쏭하네..`}
              isOpened={info[`2023-12-15`]?.hasCookie}
            />
            <GingermanCard
              name="공주 진저맨"
              date="12/16"
              pngImage={bellboy32}
              pngImage2={bellboy31}
              desc={`오호홋,, 나는 진저왕국의 공주~\n진저호텔은 아주 탐나는 곳이야.\n공주인 나도 오기 힘든 곳이라구-!`}
              isOpened={info[`2023-12-16`]?.hasCookie}
            />
            <GingermanCard
              name="웨이트 진저맨"
              date="12/17"
              pngImage={bellboy34}
              pngImage2={bellboy33}
              desc={`하낫, 둘. 하낫, 둘.\n운동은 내 삶의 일부!\n하루하루 더 건강해지는 거야-!`}
              isOpened={info[`2023-12-17`]?.hasCookie}
            />
            <GingermanCard
              name="클라이머 진저맨"
              date="12/18"
              pngImage={bellboy36}
              pngImage2={bellboy35}
              desc={`부상 조심!\n암벽장에서 클라이밍 해본 적 있어?\n도전 정신이 활활 불타오른다고-!`}
              isOpened={info[`2023-12-18`]?.hasCookie}
            />
            <GingermanCard
              name="바캉스 진저맨"
              date="12/19"
              pngImage={bellboy38}
              pngImage2={bellboy37}
              desc={`후후~\n겨울도 여름처럼 즐길 수 있지~\n진저호텔은 따뜻하니까-!`}
              isOpened={info[`2023-12-19`]?.hasCookie}
            />
            <GingermanCard
              name="사진가 진저맨"
              date="12/20"
              pngImage={bellboy40}
              pngImage2={bellboy39}
              desc={`찰칵!\n내가 담는 건 찰나의 아름다움.\n일상의 순간도 작품이 될 수 있어.`}
              isOpened={info[`2023-12-20`]?.hasCookie}
            />
            <GingermanCard
              name="원예가 진저맨"
              date="12/21"
              pngImage={bellboy42}
              pngImage2={bellboy41}
              desc={`음~ 아름다운 꽃향기~\n식물을 가꾸면 자연과 가까워질 수 있어.\n물과 햇볕도 내 친구가 될 수 있지!`}
              isOpened={info[`2023-12-21`]?.hasCookie}
            />
            <GingermanCard
              name="유령 진저맨"
              date="12/22"
              pngImage={bellboy44}
              pngImage2={bellboy43}
              desc={`우우우~ 내가 무서워?\n진저호텔에서 날 봤다는 진저맨들이 있어..\n깜짝 놀래켜줘야지! 키키~`}
              isOpened={info[`2023-12-22`]?.hasCookie}
            />
            <GingermanCard
              name="스파이 진저맨"
              date="12/23"
              pngImage={bellboy46}
              pngImage2={bellboy45}
              desc={`내가 누군지 알아?\n앗, 맞다 나 스파이지..\n나 본 거 비밀로 해줘야 돼!`}
              isOpened={info[`2023-12-23`]?.hasCookie}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/24"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-24`]?.hasCookie}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/25"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-25`]?.hasCookie}
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
