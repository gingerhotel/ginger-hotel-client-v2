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
  };

  return (
    <View style={styles.container}>
      <View style={styles.mailbox_items}>
        <MonoText style={{ color: colors.Whiteyello, marginBottom: 12 }}>
          따뜻한 편지를 보내 준 친구에게 마음을 전해요{" "}
        </MonoText>

        <LetterInput value={letterText} onChange={handleInputChange} />
        <View style={styles.nickname_input}>
          <MonoText style={styles.input_text}>받는 이</MonoText>
          <TextInput
            blurOnSubmit={true}
            style={styles.input}
            placeholder="닉네임을 입력하세요 (10자 이하)"
          />
        </View>
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
});
