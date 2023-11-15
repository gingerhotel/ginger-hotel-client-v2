import React from "react";
import {
  StyleSheet,
  Image,
  Button,
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";
import Buttons from "../components/buttons";
import LetterItem from "../components/newLetterItem";
import MailHeader from "../components/mailHeader";
import { MonoText } from "../components/styledText";

export default function Push() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <MonoText style={styles.title}>알림</MonoText>
      </SafeAreaView>
      <View style={styles.item_wrapper}>
        <View style={styles.left}>
          <MonoText>Icon</MonoText>
        </View>
        <View style={styles.right}>
          <MonoText style={styles.item_title}>두근두근! 새 편지 도착!</MonoText>
          <MonoText style={styles.item_feature}>답장 읽기 ! </MonoText>
          <MonoText style={styles.item_time}>오후 5시 20분 </MonoText>
        </View>
      </View>
      <View style={styles.item_wrapper}>
        <View style={styles.left}>
          <MonoText>Icon</MonoText>
        </View>
        <View style={styles.right}>
          <MonoText style={styles.item_title}>두근두근! 새 편지 도착!</MonoText>
          <MonoText style={styles.item_feature}>답장 읽기 ! </MonoText>
          <MonoText style={styles.item_time}>오후 5시 20분 </MonoText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 33,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: "white",
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 33,
  },

  item_wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 13,
    alignItems: "center",
  },
  left: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flexDirection: "column",
    marginLeft: 13,
  },
  item_title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
  },
  item_feature: {
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 22,
  },
  item_time: {
    fontSize: 8,
    color: "#D9D9D9",
  },
});
