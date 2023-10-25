import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";

const SVG = require("../assets/images/StartHotel.svg");

export default function CreateHotel({ navigation }: any) {
  return (
    <View style={styles.container}>
      <CreateHeader isActiveNumber={1} />
      <View style={styles.edit_wrapper}>
        <MonoText style={styles.title}>나만의 호텔을 꾸며주세요!</MonoText>

        {Platform.OS === "ios" || Platform.OS === "android" ? (
          <WithLocalSvg width={300} height={500} asset={SVG} />
        ) : (
          <Image source={SVG} style={styles.hotel_img} />
        )}

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
