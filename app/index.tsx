import { View, Text, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { Link, Redirect, router } from "expo-router";
import { SvgImg } from "../components/svgImg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { UserApiResponse } from "../api/interface";
import { MEMBER_URL, ORIGIN_URL } from "../api/url";
import { TouchableOpacity } from "react-native";
const splash = require("../assets/gingerman/splash.png");

export default function Page() {
  const moveHotel = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (!accessToken) {
      router.replace("/hotel/1");
    } else {
      axios
        .get<UserApiResponse>(`${MEMBER_URL}/my`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Origin: ORIGIN_URL,
          },
        })
        .then((response) => {
          const { hotel } = response.data;
          router.replace(`/hotel/${hotel.id}`);
        })
        .catch((e) => {
          router.replace("/hotel/1");
        }); // need to 401 test
    }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //router.replace("/hotel/1");
  moveHotel();
  //   }, 1);
  // }, []);
  return (
    <TouchableOpacity
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onPress={moveHotel}
    >
      {/* <KakaoAdFit /> */}
      <View>
        <Image source={splash} />
      </View>
    </TouchableOpacity>
  );
}
