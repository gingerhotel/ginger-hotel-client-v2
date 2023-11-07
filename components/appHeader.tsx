import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/Colors";
import { typography } from "../constants/Typo";
import { MonoText } from "./styledText";
import { SvgImg } from "./svgImg";
const arrow = require("../assets/icon/i_arrow_back.svg");

export default function Header({ title }: any) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SvgImg
        onPress={() => navigation.goBack()}
        a_width={30}
        a_height={30}
        url={arrow}
        width={30}
        height={30}
      />
      <Text style={[styles.title, typography.soyo]}>{title}</Text>
      <View style={styles.empty}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingTop: 11,
    paddingBottom: 11,
    backgroundColor: colors.greyblack,
    borderBottomColor: colors.greyblack,
    justifyContent: "space-between",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center", // 수평 가운데 정렬
  },
  title: {
    fontSize: 18,
    color: colors.Whiteyello,
  },
  empty: {
    width: 30,
    height: 30,
  },
});
