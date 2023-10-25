import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";

const SVG = require("../assets/images/StartHotel.svg");

export default function CreateHotelName({ navigation }: any) {
  return (
    <View style={styles.container}>
      <CreateHeader isActiveNumber={2} />
      <View style={styles.edit_wrapper}>
        <MonoText style={styles.title}>누구의 호텔인가요?</MonoText>

        {Platform.OS === "ios" || Platform.OS === "android" ? (
          <WithLocalSvg width={300} height={500} asset={SVG} />
        ) : (
          <Image source={SVG} style={styles.hotel_img} />
        )}

        <TextInput style={styles.input} placeholder="내 닉네임 (호텔 이름)" />

        <TextInput
          style={styles.letter}
          multiline={true}
          numberOfLines={5}
          placeholder="호텔 소개"
        />

        <Buttons
          navigation={navigation}
          url={"hotelselect"}
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
