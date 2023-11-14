import * as React from "react";
import { View, StyleSheet } from "react-native";
import Buttons from "../components/buttons";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SVG = require("../assets/images/StartHotel.svg");

export default function createHotelAgree({ navigation }: any) {
  AsyncStorage.getItem(
    'accessToken', //String 타입
    (err, result) => {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${result}`;
  });
  
  return (
    <View style={styles.container}>
      <CreateHeader isActiveNumber={3} />
      <View style={styles.edit_wrapper}>
        <MonoText style={styles.title}>
          서비스 이용 약관에 동의해주세요
        </MonoText>

        <Buttons
          navigation={navigation}
          url={"hotels"}
          title="완료"
          color="green"
          callback={async()=>{
            const response = await axios.post(
              'http://127.0.0.1:8080/auth/hotel',
              {
                "structColor": "#0E5E6F",
                "bodyColor": "#AF2010",
                "nickname": "헤르미온느",
                "description": "제 호텔에 오신걸 환영합니다.",
                "gender": "MAN",
                "birthDate": "1998-06-13",
                "code": "asadasd"
              }
              )

          }}
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
