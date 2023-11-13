import * as React from "react";
import { View, StyleSheet } from "react-native";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";
import { SvgImg } from "../components/svgImg";

const SVG = require("../assets/images/StartHotel.svg");

export default function CreateHotel({ navigation }: any) {
  return (
    <View style={styles.container}>
      <CreateHeader isActiveNumber={1} />
      <View style={styles.edit_wrapper}>
        <MonoText style={styles.title}>나만의 호텔을 꾸며주세요!</MonoText>

        <SvgImg
          url={SVG}
        />

        <Buttons
          navigation={navigation}
          url={"hotelname"}
          title="다음"
          color="red"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 60,
    flex: 1,
    justifyContent: "flex-start",
  },
  edit_wrapper: {
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  hotel_img: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
});
