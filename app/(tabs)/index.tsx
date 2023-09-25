import React from "react";
import { Image, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import SvgUri from "react-native-svg-uri"; // react-native-svg 패키지에서 가져옴
import { MonoText } from "../../components/StyledText";
import Header from "../../components/Header";

let StartHotel = require("../../assets/images/StartHotel.svg");
let icon = require("../../assets/images/img.png");

export default function TabOneScreen() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  hotel_img: {
    width: 300,
    height: 400,
  },
});
