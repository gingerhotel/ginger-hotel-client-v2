import { StyleSheet, Image, Platform } from "react-native";
import Buttons from "../components/buttons";
import { MonoText } from "../components/styledText";
import { View } from "../components/themed";
import MailHeader from "../components/mailHeader";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import { SvgImg } from "../components/svgImg";
import { colors } from "../constants/Colors";
const gingerman = require("../assets/gingerman/g_bellboy.svg");

export default function GingerCard({ navigation }: any) {
  return (
    <View style={styles.container}>
      <MailHeader />
      <Buttons
        navigation={navigation}
        url={"mailbox"}
        title="도착한 편지"
        color="green"
      />

      <ScrollView>
        <View style={styles.card_wrapper}>
          <MonoText style={styles.ginger_name}>벨보이 진저맨</MonoText>
          <MonoText style={styles.ginger_desc}>
            진저호텔에 온 걸 환영한다! {"\n"}
            크리스마스에 진저호텔이라... {"\n"}탁월한 선택!
          </MonoText>
          <View style={styles.mailbox_items}>
            <SvgImg a_width={150} url={gingerman} width={150} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mailbox_items: {
    backgroundColor: colors.greyblack,
    padding: 15,
    display: "flex",
    alignItems: "center",
  },
  ginger_img: {
    width: 150,
  },
  ginger_name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  ginger_desc: {
    maxWidth: 180,
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
  },
  card_wrapper: {
    borderStyle: "solid",
    borderColor: "#D9D9D9",
    borderRadius: 6,
    borderWidth: 3,
    padding: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 281,
    marginTop: 30,
  },
});
