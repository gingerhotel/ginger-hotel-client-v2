import React from "react";
import {
  StyleSheet,
  Image,
  Button,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import Buttons from "../components/buttons";
import LetterHeader from "../components/letterHeader";
import { MonoText } from "../components/StyledText";

export default function LetterCompleted({ navigation }: any) {
  return (
    <View style={styles.container}>
      <MonoText>편지 전송 완료!</MonoText>
      <Buttons
        navigation={navigation}
        url={"hotels"}
        title="친구 진저호텔로 돌아가기( or ‘확인’)"
        color="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
});
