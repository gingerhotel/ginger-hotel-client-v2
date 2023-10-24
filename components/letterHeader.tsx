import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { MonoText } from "./StyledText";

const letter = require("../assets/images/mailbox.png");

const LetterHeader = ({ marginTop, isAnswer }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", width: "100%" }}>
      <View style={[cstyles(marginTop).mailbox_header, styles.mailbox_header]}>
        <Image source={letter} style={styles.letter_img} />
        <MonoText style={styles.title}>
          {!isAnswer ? "친구의 호텔에 편지를 보내주세요!" : "답장 보내기"}
        </MonoText>
        <MonoText style={styles.sub}>
          {isAnswer
            ? "상대방은 내가 누군지 알고 있어요 상대방의 정체가 궁금하다면, ‘엿보기’ 기능을 사용해보세요!!"
            : ""}
        </MonoText>
      </View>
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
    height: 165,
    backgroundColor: "#D9D9D9",
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
    textAlign: "center",
    fontWeight: "bold",
  },
  letter_img: {
    width: 150,
    height: 40,
  },

  sub: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
  },
});

export default LetterHeader;
