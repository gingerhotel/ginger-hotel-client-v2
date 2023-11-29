import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../constants/Colors";
import GingermanCard from "../../components/gingermanCard";
import Header from "../../components/appHeader";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useQuery } from "react-query";
import { getHotel } from "../../api/hotelApi";
import { hotelIdState } from "../../atom/letterAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Text } from "../../components/themed";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bellboy = require("../../assets/gingerman/Album_Ginger/a_bellboy.png");

const GingerAlbum = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [hotelId, setHotelId] = useRecoilState<string>(hotelIdState);
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  const [info, setInfo] = useState<any>([]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const handleHotelData = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios
        .get(`${BASE_URL}/hotel/1`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res);
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
  console.log(info);

  return (
    <>
      <Header title="진저맨 앨범" />
      <ScrollView>
        <View style={styles.containter}>
          <View style={styles.card_container}>
            <GingermanCard
              name="벨보이 진저맨"
              date="12/01"
              pngImage={bellboy}
              isOpened={true}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/02"
              pngImage={bellboy}
              isOpened={info[`2023-12-02`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/03"
              pngImage={bellboy}
              isOpened={info[`2023-12-03`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/04"
              pngImage={bellboy}
              isOpened={info[`2023-12-04`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/05"
              pngImage={bellboy}
              isOpened={info[`2023-12-05`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/06"
              pngImage={bellboy}
              isOpened={info[`2023-12-06`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/07"
              pngImage={bellboy}
              isOpened={info[`2023-12-07`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/08"
              pngImage={bellboy}
              isOpened={info[`2023-12-08`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/09"
              pngImage={bellboy}
              isOpened={info[`2023-12-09`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/10"
              pngImage={bellboy}
              isOpened={info[`2023-12-10`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/11"
              pngImage={bellboy}
              isOpened={info[`2023-12-11`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/12"
              pngImage={bellboy}
              isOpened={info[`2023-12-12`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/13"
              pngImage={bellboy}
              isOpened={info[`2023-12-13`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/14"
              pngImage={bellboy}
              isOpened={info[`2023-12-14`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/15"
              pngImage={bellboy}
              isOpened={info[`2023-12-15`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/16"
              pngImage={bellboy}
              isOpened={info[`2023-12-16`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/17"
              pngImage={bellboy}
              isOpened={info[`2023-12-17`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/18"
              pngImage={bellboy}
              isOpened={info[`2023-12-18`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/19"
              pngImage={bellboy}
              isOpened={info[`2023-12-19`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/20"
              pngImage={bellboy}
              isOpened={info[`2023-12-20`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/21"
              pngImage={bellboy}
              isOpened={info[`2023-12-21`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/22"
              pngImage={bellboy}
              isOpened={info[`2023-12-22`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/23"
              pngImage={bellboy}
              isOpened={info[`2023-12-23`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/24"
              pngImage={bellboy}
              isOpened={info[`2023-12-24`]?.isOpen}
            />
            <GingermanCard
              name="벨보이 진저맨"
              date="12/25"
              pngImage={bellboy}
              isOpened={info[`2023-12-25`]?.isOpen}
            />
          </View>
        </View>
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
});

export default GingerAlbum;
