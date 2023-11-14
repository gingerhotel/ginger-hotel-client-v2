import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../constants/Colors";
import { useState } from "react";
import CheckBox from "../components/chekbox";

export default function createHotelAgree({ navigation }: any) {
  const [isChecked, setChecked] = useState<any>({
    all: false,
    age: false,
    use: false,
    personal: false,
  });
  const checkAgree = (type: string) => {
    if (type === "all") {
      for (let item in isChecked) {
        isChecked[item] = !isChecked[item];
      }
      setChecked({ ...isChecked });
      return;
    }
    isChecked[type] = !isChecked[type];
    setChecked({ ...isChecked });
  };

  AsyncStorage.getItem(
    "accessToken", //String 타입
    (err, result) => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${result}`;
    }
  );

  return (
    <>
      <CreateHeader isActiveNumber={4} />
      <View style={styles.container}>
        <View style={styles.edit_wrapper}>
          <MonoText style={styles.title}>이용약관에 동의해주세요</MonoText>
          <CheckBox
            checked={isChecked.all}
            bg={true}
            text="서비스 이용약관에 모두 동의합니다."
            onPress={() => checkAgree("all")}
          />
          <View style={styles.hr}></View>
          <CheckBox
            checked={isChecked.age}
            bg={false}
            text="[필수] 만 14세 이상입니다"
            onPress={() => checkAgree("age")}
          />
          <CheckBox
            checked={isChecked.use}
            onPress={() => checkAgree("use")}
            bg={false}
            text="[필수] 이용약관 동의"
          />
          <CheckBox
            checked={isChecked.personal}
            onPress={() => checkAgree("personal")}
            bg={false}
            text="[필수] 개인정보 처리방침 동의"
          />
        </View>

        <View style={styles.btn_wrapper}>
          <Buttons
            navigation={navigation}
            url={"hotels"}
            title="완료"
            color="green"
            callback={async () => {
              const response = await axios.post(
                "http://127.0.0.1:8080/auth/hotel",
                {
                  structColor: "#0E5E6F",
                  bodyColor: "#AF2010",
                  nickname: "헤르미온느",
                  description: "제 호텔에 오신걸 환영합니다.",
                  gender: "MAN",
                  birthDate: "1998-06-13",
                  code: "asadasd",
                }
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(30,31,35,1.00)",
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
  edit_wrapper: {
    marginTop: 40,
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    color: colors.Whiteyello,
    marginBottom: 50,
  },
  btn_wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 70,
    position: "absolute",
    bottom: 30,
    left: 0,
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  hr: {
    height: 1,
    backgroundColor: colors.grey900,
    marginTop: 22,
    marginBottom: 22,
  },
});
