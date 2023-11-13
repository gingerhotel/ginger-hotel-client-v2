import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { MonoText } from "./styledText";
import { colors } from "../constants/Colors";
import { typography } from "../constants/Typo";

const letter = require("../assets/images/mailbox.png");

const MailHeader = ({ marginTop, isTitle = true }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#1E1F23", width: "100%" }}>
      <View style={[cstyles(marginTop).mailbox_header, styles.mailbox_header]}>
        <View style={styles.tabStyle}>
          <Text style={[styles.tabText, typography.basic]}>새로운 편지 2</Text>
          <Text style={[styles.tabText, typography.basic]}>답장 6</Text>
        </View>
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
  tabContainer: {
    width: 390,
    height: 64,
  },
  tabStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  mailbox_header: {
    // height: 145,
    backgroundColor: "#1E1F23",
    display: "flex",
    flexDirection: "column",
    // padding: 30,
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
  tabText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.Whiteyello,
  },
});

export default MailHeader;
