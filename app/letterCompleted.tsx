import { useNavigation, useRoute } from "@react-navigation/native";
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

export default function LetterCompleted() {
  const navigation: any = useNavigation();
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const isAnswer = prevRoute.name === "answer" ? true : false;
  console.log();
  return (
    <View style={styles.container}>
      <MonoText>{isAnswer ? "답장" : "편지"} 전송 완료!</MonoText>
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
