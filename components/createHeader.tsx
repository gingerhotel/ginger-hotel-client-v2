import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MonoText } from "./styledText";
let icon = require("../assets/icon/i_favorite.png");

const CreateHeader = ({ isActiveNumber = 1 }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", width: "100%" }}>
      <View style={styles.wrapper}>
        <View style={styles.circle_wrapper}>
          <View style={[styles.circle, isActiveNumber === 1 && styles.active]}>
            <MonoText>1</MonoText>
          </View>
          <MonoText style={styles.text}>호텔 색상</MonoText>
        </View>
        <View style={styles.circle_wrapper}>
          <View style={[styles.circle, isActiveNumber === 2 && styles.active]}>
            <MonoText>2</MonoText>
          </View>
          <MonoText style={styles.text}>호텔 이름</MonoText>
        </View>
        <View style={styles.circle_wrapper}>
          <View style={[styles.circle, isActiveNumber === 3 && styles.active]}>
            <MonoText>3</MonoText>
          </View>
          <MonoText style={styles.text}>선택 정보</MonoText>
        </View>
        <View style={styles.circle_wrapper}>
          <View style={[styles.circle, isActiveNumber === 4 && styles.active]}>
            <MonoText>4</MonoText>
          </View>
          <MonoText style={styles.text}>약관 동의</MonoText>
        </View>
      </View>

      <View style={styles.line}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    backgroundColor: "darkgray",
    justifyContent: "center",
    position: "relative",
    zIndex: 0,
  },
  active: {
    backgroundColor: "skyblue",
  },
  line: {
    height: 2,
    width: 280,
    left: 60,
    backgroundColor: "darkgray",
    position: "absolute",
    top: 13,
    zIndex: -1,
  },
  circle_wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default CreateHeader;
