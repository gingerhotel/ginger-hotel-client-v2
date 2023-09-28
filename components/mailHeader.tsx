import React from "react";
import { Text, Pressable, StyleSheet, View, Image } from "react-native";
import { MonoText } from "./StyledText";

const letter = require("../assets/images/mailbox.png");

const MailHeader = () => {
  return (
    <View style={styles.mailbox_header}>
      <Image source={letter} style={styles.letter_img} />
      <MonoText style={styles.title}>민지의 호텔 편지함</MonoText>
    </View>
  );
};

const styles = StyleSheet.create({
  mailbox_header: {
    marginTop: 30,
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
