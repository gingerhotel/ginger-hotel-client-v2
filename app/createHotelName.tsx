import * as React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";
import Input from "../components/input";
import { useState } from "react";
import { SvgImg } from "../components/svgImg";
import CustomUserHotel from "../components/customUserHotel";

export default function CreateHotelName({ route, navigation }: any) {
  const hotel_color = route.params;
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <CreateHeader isActiveNumber={2} />
      <ScrollView style={styles.container}>
        <View style={styles.edit_wrapper}>
          <MonoText style={styles.title}>누구의 호텔인가요?</MonoText>
          <MonoText style={styles.desc}>
            호텔 이름은 나중에도 수정할 수 있어요!
          </MonoText>
        </View>

        <View>
          <CustomUserHotel
            is_border={true}
            wallColor={hotel_color?.bodyColor}
            structColor={hotel_color?.structColor}
          />
        </View>

        <View style={{ padding: 3, paddingTop: 10 }}>
          <Input
            onChange={(text: string) => setNickname(text)}
            placeholder="내 닉네임"
          />
          <View style={{ marginTop: 8 }}></View>
          <Input
            multiline={5}
            onChange={(text: string) => setDescription(text)}
            placeholder="내 호텔을 소개해주세요(최대 NN글자)"
          />
        </View>
        <View style={styles.btn_wrapper}>
          <Buttons
            navigation={navigation}
            url={"hotelselect"}
            props={{ ...hotel_color, nickname, description }}
            title="다음으로"
            color="green"
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(30,31,35,1.00)",
    padding: 10,
  },
  img_wrapper: {
    borderWidth: 0.3,
    borderColor: colors.grey500,
    zIndex: 3,
    marginTop: 26,
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
  },
  edit_wrapper: {
    marginTop: 30,
    marginLeft: 7,
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    color: colors.Whiteyello,
  },
  desc: {
    textAlign: "left",
    fontSize: 12,
    color: colors.grey500,
    marginTop: 8,
  },
  hotel_img: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
  letter: {
    backgroundColor: "#c9c9c9",
    padding: 10,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#c9c9c9",
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  btn_wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 70,
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 28,
  },
});
