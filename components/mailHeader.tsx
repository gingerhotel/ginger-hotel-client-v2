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

const MailHeader = ({ marginTop, isTitle = true }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", width: "100%" }}>
      <View style={[cstyles(marginTop).mailbox_header, styles.mailbox_header]}>
        <Image source={letter} style={styles.letter_img} />
        {isTitle && (
          <MonoText style={styles.title}>민지의 호텔 편지함</MonoText>
        )}
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
    height: 145,
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
  },
  letter_img: {
    width: 150,
    height: 40,
  },
});

export default MailHeader;
