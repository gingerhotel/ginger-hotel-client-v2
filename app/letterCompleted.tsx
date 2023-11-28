import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
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
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";

export default function LetterCompleted() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);


  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const isAnswer = prevRoute.name === "answer" ? true : false;
  return (
    <View style={styles.container}>
      <View style={styles.mailbox_items}>
        <MonoText style={styles.title}>
          {isAnswer ? "답장을" : "편지를"} 보냈어요!
        </MonoText>
        <MonoText style={styles.text}>
          답장이 오면 ‘알림’으로 알려드릴게요!
        </MonoText>

        <View style={styles.temp}>
          <MonoText>일러스트</MonoText>
        </View>
      </View>

      <View style={styles.footer}>
        <Buttons
          is_width={true}
          url={"village"}
          title="빌리지 가기"
          color="darkgray"
        />
        &nbsp;&nbsp;&nbsp;
        <Buttons
          //navigation={navigation}
          url={"hotel/1"}
          title="진저호텔 홈으로"
          is_width={true}
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
    flex: 1,
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

  title: {
    fontSize: 20,
    color: colors.Whiteyello,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    color: colors.grey500,
  },
  temp: {
    backgroundColor: colors.green100,
    width: 300,
    height: 400,
    marginTop: 30,
  },
});
