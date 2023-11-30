import React, { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { MonoText } from "./styledText";
import { SvgImg } from "./svgImg";
import {
  DateText,
  MailBoxView,
  MailChoseContainer,
  MailChoseText,
  MailChoseView,
  MailInfoView,
  MailNumberText,
  MailTitleText,
  MailTitleView,
} from "../style/mailBoxStyled";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  letterCountState,
  letterSwitchState,
  letterUpdateState,
  newLetterCountState,
} from "../atom/letterAtom";
import { getCurrentDateDot } from "../data/data";
import { router, useLocalSearchParams } from "expo-router";
import { useQuery } from "react-query";
import { getHotel } from "../api/hotelApi";

const arrow = require("../assets/icon/i_left_arrow.svg");
const MailHeader = ({ marginTop, isTitle = true, navigation }: any) => {
  const [letterCheck, setLetterCheck] = useRecoilState(letterSwitchState);
  const [date, setDate] = useState<string>("");
  const countCheck = useRecoilValue(letterUpdateState);
  const [letterCount, setLetterCountState] = useRecoilState(letterCountState);
  const { id } = useLocalSearchParams()
  const { data, isLoading, refetch } = useQuery("newLetters", {
    onError: (e) => {
      console.log(`useQuery error : ${e}`);
    },
  });
  useEffect(() => {
    setDate(getCurrentDateDot());
  }, []);
  const onLetterChange = (type: string) => {
    if (type === "1") {
      if (!letterCheck.new) {
        setLetterCheck({
          new: true,
          reply: false,
        });
        return;
      }
    }
    if (type === "2") {
      if (!letterCheck.reply) {
        setLetterCheck({
          new: false,
          reply: true,
        });
      }
    }
  };
  console.log(data);
  useEffect(() => {
    refetch();
  }, [countCheck]);
  useEffect(() => {
    setLetterCountState(
      {
        lettersLen: data?.letters?.length,
        repliesLen: data?.replies?.length

      }
    )
  }, [])
  if (isLoading) {
    return <Text>...로딩</Text>;
  }
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <MailBoxView>
        <SvgImg url={arrow} onPress={() => router.push(`/hotel/${id}`)}></SvgImg>
        <MailTitleView>
          <MailTitleText>내 호텔 편지함</MailTitleText>
          <MailNumberText>
            {letterCount.lettersLen + letterCount.repliesLen}
          </MailNumberText>
        </MailTitleView>
        <View />
      </MailBoxView>
      <MailChoseContainer>
        <MailInfoView>
          <TouchableOpacity onPress={() => onLetterChange("1")}>
            <MailChoseView b_color={letterCheck.new ? "#34AB96" : "#000"}>
              <MailChoseText f_color={letterCheck.new ? "#fff" : "#6E6E73"}>
                새로운 편지 {letterCount.lettersLen}
              </MailChoseText>
            </MailChoseView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onLetterChange("2")}>
            <MailChoseView b_color={!letterCheck.reply ? "#000" : "#34AB96"}>
              <MailChoseText f_color={!letterCheck.reply ? "#6E6E73" : "#fff"}>
                답장 {letterCount.repliesLen}
              </MailChoseText>
            </MailChoseView>
          </TouchableOpacity>
        </MailInfoView>
        <MailChoseView b_color="#000">
          <DateText f_color="#DDDDDE">{date}</DateText>
        </MailChoseView>
      </MailChoseContainer>
    </SafeAreaView>
  );
};

export default MailHeader;
