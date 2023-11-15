import React, { useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  Image,
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
import { useNavigation } from "expo-router";

const arrow = require("../assets/icon/i_left_arrow.svg")
const MailHeader = ({ marginTop, isTitle = true, navigation }: any) => {
  const [textColor, setTextColor] = useState("#fff");
  const [borderColor, setBorderColor] = useState("#34AB96");
  const [checkNew, setCheckNew] = useState(true);
  const [checkRe, setCheckRe] = useState(true);
  const onLetterChange = (type: string) => {
    if (type === '1') {
      if (!checkRe) {
        setCheckNew(true)
        setCheckRe(true)
        return
      }
    }
    if (type === '2') {
      if (checkNew) {
        setCheckRe(false)
        setCheckNew(false)
      }
    }
  }
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <MailBoxView>
        <SvgImg url={arrow} onPress={() => navigation.goBack()}></SvgImg>
        <MailTitleView>
          <MailTitleText>오늘의 편지함</MailTitleText>
          <MailNumberText>64</MailNumberText>
        </MailTitleView>
        <View />
      </MailBoxView>
      <MailChoseContainer>
        <MailInfoView>
          <TouchableOpacity onPress={() => onLetterChange('1')}>
            <MailChoseView b_color={checkNew ? "#34AB96" : "#000"} >
              <MailChoseText f_color={checkNew ? "#fff" : "#6E6E73"}>새로운 편지 2</MailChoseText>
            </MailChoseView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onLetterChange('2')}>
            <MailChoseView b_color={checkRe ? "#000" : "#34AB96"}>
              <MailChoseText f_color={checkRe ? "#6E6E73" : "#fff"}>답장 2</MailChoseText>
            </MailChoseView>
          </TouchableOpacity>
        </MailInfoView>
        <MailChoseView b_color="#000">
          <MailChoseText f_color="#fff">2023.12.04</MailChoseText>
        </MailChoseView>
      </MailChoseContainer>
    </SafeAreaView>
  );
};
const cstyles = (marginTop: number) =>
  StyleSheet.create({
    mailbox_header: {
      marginTop,
    },
  });

const styles = StyleSheet.create({
  mailbox_header: {
    width: "100%",
    height: 145,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    display: "flex",
    flexDirection: "column",
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginTop: 20,
  },
  letter_img: {
    width: 150,
    height: 40,
  },
});

export default MailHeader;
