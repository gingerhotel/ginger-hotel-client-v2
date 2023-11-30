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
      <View style={styles.header}>
        <Text style={styles.header_text}>진저맨 앨범</Text>
      </View>
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
              name="벨보이 진저맨"
              date="12/02"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-02`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/03"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-03`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/04"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-04`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/05"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-05`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/06"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-06`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/07"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-07`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/08"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-08`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/09"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
              isOpened={info[`2023-12-09`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/10"
              pngImage={bellboy}
              pngImage2={bellboy2}
              desc={``}
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
