import * as React from "react";
import { View, StyleSheet } from "react-native";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";

const SVG = require("../assets/images/StartHotel.svg");

export default function createHotelSelect({ navigation }: any) {
  return (
    <View style={styles.container}>
      <CreateHeader isActiveNumber={3} />
      <View style={styles.edit_wrapper}>
        <MonoText style={styles.title}>
          맞춤 혜택 제공을 위한 {"\n"}
          추가 정보를 알려주세요
        </MonoText>

        <Buttons
          navigation={navigation}
          url={"hotelagree"}
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
  letter: {
    width: 300,
    backgroundColor: "#c9c9c9",
    padding: 10,
    textAlign: "center",
  },
  input: {
    width: 300,
    backgroundColor: "#c9c9c9",
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
