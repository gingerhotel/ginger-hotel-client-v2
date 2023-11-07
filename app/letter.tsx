import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Buttons from "../components/buttons";
import LetterInput from "../components/letterInput";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";

export default function Letter({ navigation }: any) {
  const [letterText, setLetterText] = useState("");

  const handleInputChange = (text: string) => {
    setLetterText(text);
    console.log(letterText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mailbox_items}>
        <MonoText style={{ color: colors.Whiteyello, marginBottom: 12 }}>
          따뜻한 편지를 보내 준 친구에게 마음을 전해요{" "}
        </MonoText>

        <LetterInput value={letterText} onChange={handleInputChange} />
        <TextInput
          style={styles.input}
          placeholder="닉네임을 입력하세요 (10자 이하)"
        />
        <Buttons url={"gingercard"} title="이미지 첨부" color="green" />
        <Buttons
          navigation={navigation}
          url={"completed"}
          title="보내기"
          color="green"
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
  },
  input: {
    width: 300,
    backgroundColor: "white",
    padding: 10,
    marginTop: 20,
    textAlign: "left",
    marginBottom: 20,
  },
});
