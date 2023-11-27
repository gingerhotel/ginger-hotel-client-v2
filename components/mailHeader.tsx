import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MonoText } from "./styledText";
import { SvgImg } from "./svgImg";
import {
  MailBoxView,
  MailChoseContainer,
  MailChoseText,
  MailChoseView,
  MailInfoView,
  MailNumberText,
  MailTitleText,
  MailTitleView
} from "../style/mailBoxStyled";
import { useRecoilState } from "recoil";
import { letterSwitchState } from "../atom/letterAtom";
import { getCurrentDateDot } from "../data/data";
import { router } from "expo-router";

const arrow = require("../assets/icon/i_left_arrow.svg")
const MailHeader = ({ marginTop, isTitle = true, navigation }: any) => {
  const [letterCheck, setLetterCheck] = useRecoilState(letterSwitchState);
  const [date, setDate] = useState<string>("");
  useEffect(() => {
    setDate(getCurrentDateDot())
  }, [])
  const onLetterChange = (type: string) => {
    if (type === '1') {
      if (!letterCheck.new) {
        setLetterCheck(
          {
            new: true,
            reply: false
          }
        )
        return
      }
    }
    if (type === '2') {
      if (!letterCheck.reply) {
        setLetterCheck(
          {
            new: false,
            reply: true
          }
        )
      }
    }
  }
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <MailBoxView>
        <SvgImg url={arrow} onPress={() => router.back()}></SvgImg>
        <MailTitleView>
          <MailTitleText>오늘의 편지함</MailTitleText>
          <MailNumberText>64</MailNumberText>
        </MailTitleView>
        <View />
      </MailBoxView>
      <MailChoseContainer>
        <MailInfoView>
          <TouchableOpacity onPress={() => onLetterChange('1')}>
            <MailChoseView b_color={letterCheck.new ? "#34AB96" : "#000"} >
              <MailChoseText f_color={letterCheck.new ? "#fff" : "#6E6E73"}>새로운 편지 2</MailChoseText>
            </MailChoseView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onLetterChange('2')}>
            <MailChoseView b_color={!letterCheck.reply ? "#000" : "#34AB96"}>
              <MailChoseText f_color={!letterCheck.reply ? "#6E6E73" : "#fff"}>답장 2</MailChoseText>
            </MailChoseView>
          </TouchableOpacity>
        </MailInfoView>
        <MailChoseView b_color="#000">
          <MailChoseText f_color="#fff">{date}</MailChoseText>
        </MailChoseView>
      </MailChoseContainer>
    </SafeAreaView>
  );
};

export default MailHeader;
