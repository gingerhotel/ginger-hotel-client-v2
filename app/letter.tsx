import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View, TextInput } from "react-native";
import Buttons from "../components/buttons";
import LetterInput from "../components/letterInput";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";
import axios from "axios";

export default function Letter({ navigation }: any) {
  const [letterText, setLetterText] = useState("");

  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("letters");
    register("nickname");
  }, [register]);

  const writeLetter = async (data:any) => {
    const response = await axios.post(
      'http://127.0.0.1:8080/letters/hotel/1',
      {
        senderNickname: data.letters,
        content: data.nickname,
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mailbox_items}>
        <MonoText style={{ color: colors.Whiteyello, marginBottom: 12 }}>
          따뜻한 편지를 보내 준 친구에게 마음을 전해요{" "}
        </MonoText>

        <TextInput
          style={styles.letter}
          multiline={true}
          numberOfLines={20}
          placeholder="전하고 싶은 말을 적어주세요!"
          onChangeText={(text) => setValue("letters", text)}
        />
        <View style={styles.nickname_input}>
          <MonoText style={styles.input_text}>받는 이</MonoText>
          <TextInput
          blurOnSubmit={true}
          style={styles.input}
          placeholder="닉네임을 입력하세요 (10자 이하)"
          onChangeText={(text) => setValue("nickname", text)}
         />
        </View>
      </View>
      <View style={styles.footer}>
        <Buttons
          is_width={true}
          url={"gingercard"}
          title="이미지 첨부"
          color="darkgray"
        />
        <MonoText>{'   '}</MonoText>
        <Buttons
          navigation={navigation}
          url={"completed"}
          title="보내기"
          is_width={true}
          color="green"
          callback={handleSubmit(writeLetter)}
          // callback={async () => {
          //   const response = await axios.post(
          //     'http://127.0.0.1:8080//letters/hotel/1',
          //     {
          //       senderNickname: "민수쓰",
          //       content: "콜링아이",
          //     }
          //     );
          // }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  mailbox_items: {
    backgroundColor: colors.greyblack,
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  nickname_input: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    backgroundColor: colors.grey900,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    borderRadius: 6,
    marginTop: 20,
    textAlign: "left",
    marginBottom: 20,
  },
  input_text: {
    fontSize: 12,
    color: colors.grey500,
  },
  input: {
    flex: 1,
    width: "100%",
    height: 30,
    backgroundColor: colors.grey900,
    paddingLeft: 16,
    borderRadius: 6,
    textAlign: "left",
    fontSize: 16,
    color: colors.grey200,
    outlineStyle: "none",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.greyblack,
    alignItems: "center",
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
    border: "none",
    marginTop: -3,
  },
  letter: {
    width: 300,
    backgroundColor: colors.grey900,
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 18,
    paddingRight: 18,
    textAlign: "left",
    border: "4px solid #719898",
    borderRadius: 12,
    color: colors.grey500,
    outlineStyle: "none",
    fontFamily: "NanumSquareNeo-Variable",
    lineHeight: 18,
  },
});
