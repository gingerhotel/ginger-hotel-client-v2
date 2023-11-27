import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import Buttons from "../components/buttons";
import Chip from "../components/chip";
import CreateHeader from "../components/createHeader";
import Input from "../components/input";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";
import { Image } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Header from "../components/appHeader";
const icon = require("../assets/icon/i_check_user.png");

export default function createHotelSelect() {
  const props = useLocalSearchParams();
  const sex_english: any = { 선택안함: "", 남성: "MAN", 여성: "WOMAN" };
  const sex_chip = ["선택안함", "여성", "남성"];
  const [activeChip, setChip] = React.useState("선택안함");
  const [activeBirth, setBirth] = React.useState("선택안함");
  const [code, setCode] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const input_size = {
    web: 110,
    app: 100,
  };

  return (
    <>
      <Header title="호텔 만들기" />
      <CreateHeader isActiveNumber={3} />
      <ScrollView style={styles.container}>
        <View style={styles.edit_wrapper}>
          <MonoText style={styles.title}>선택 정보를 입력해주세요</MonoText>

          <MonoText style={styles.input_title}>성별</MonoText>
          <View style={styles.chip_wrapper}>
            {sex_chip?.map((text, index) => (
              <TouchableOpacity key={index} onPress={() => setChip(text)}>
                <Chip text={text} active={activeChip} width={80} />
              </TouchableOpacity>
            ))}
          </View>

          <MonoText style={styles.input_title}>생년월일</MonoText>
          <MonoText style={styles.input_label}>
            생년월일을 형식에 맞게 입력해주세요.
          </MonoText>

          <Chip text={"선택안함"} active={activeBirth} />
          <View style={styles.input_wrapper}>
            <Input
              placeholder="YYYY"
              width={
                Platform.OS === "ios" || Platform.OS === "android"
                  ? input_size.app
                  : input_size.web
              }
              onChange={(text: string) => setYear(text)}
            />
            <View style={{ marginLeft: 8 }}></View>
            <Input
              placeholder="MM"
              width={
                Platform.OS === "ios" || Platform.OS === "android"
                  ? input_size.app
                  : input_size.web
              }
              onChange={(text: string) => setMonth(text)}
            />
            <View style={{ marginLeft: 8 }}></View>
            <Input
              placeholder="DD"
              width={
                Platform.OS === "ios" || Platform.OS === "android"
                  ? input_size.app
                  : input_size.web
              }
              onChange={(text: string) => setDay(text)}
            />
          </View>

          <MonoText style={styles.input_title}>친구코드 입력</MonoText>
          <MonoText style={styles.input_label}>
            나를 초대해 준 친구가 있나요? {"\n"}
            {"\n"}
            친구 코드를 적으면 나와 친구 모두 창문 열쇠를 1개씩 받을 수 있어요!
          </MonoText>

          <View style={styles.input_wrapper_2}>
            <Input
              onChange={(text: string) => setCode(text)}
              width={"90%"}
              placeholder="친구 코드 7자리를 입력해주세요 (ex. 14B78H1)"
            />
            <View style={styles.icon}>
              <Image style={{ width: 27, height: 27 }} source={icon} />
            </View>
          </View>
        </View>
        <View style={styles.btn_wrapper}>
          <Buttons
            url={"createHotelAgree"}
            title="다음으로"
            color="green"
            props={{
              ...props,
              gender: sex_english[activeChip],
              code,
              birthDate: activeBirth ? "" : `${year}-${month}-${day}`,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(30,31,35,1.00)",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  edit_wrapper: {
    marginTop: 40,
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    color: colors.Whiteyello,
  },
  input_title: {
    marginTop: 40,
    marginBottom: 14,
    color: colors.Whiteyello,
    fontSize: 16,
  },
  input_label: {
    fontSize: 11,
    color: colors.grey600,
    marginBottom: 20,
  },
  btn_wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 70,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 30,
  },
  chip_wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  input_wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },

  input_wrapper_2: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
    paddingRight: 20,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 6,
    backgroundColor: colors.green600,
    marginLeft: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
