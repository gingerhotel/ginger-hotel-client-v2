import React from "react";
import { StyleSheet, Image, Button, ScrollView, View } from "react-native";
import Buttons from "../components/buttons";
import LetterItem from "../components/letterItem";
import MailHeader from "../components/mailHeader";

export default function MailBox({ navigation }: any) {
  return (
    <>
      <MailHeader marginTop={50} />
      <View style={styles.btn_wrapper}>
        <Buttons
          navigation={navigation}
          url={"gingercard"}
          title="진저맨 카드"
          color="green"
        />
      </View>

      <ScrollView>
        <View style={styles.mailbox_items}>
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "white",
  },
  mailbox_items: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: "white",
    height: "100%",
  },
  title: {
    fontSize: 25,
    marginTop: 20,
  },
  letter_img: {
    width: 150,
    height: 40,
  },
  btn_wrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
});
