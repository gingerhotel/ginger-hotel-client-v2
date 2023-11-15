import React from "react";
import { StyleSheet, Image, Button, ScrollView, View } from "react-native";
import Buttons from "../components/buttons";
import LetterItem from "../components/letterItem";
import MailHeader from "../components/mailHeader";

export default function MailBox({ navigation }: any) {
  return (
    <View style={styles.container}>

      <MailHeader marginTop={50} navigation={navigation} />
      <ScrollView>
        <View style={styles.mailbox_items}>
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
          <LetterItem
            navigation={navigation}
            from={""}
            contents={""}
            is_active={false}
          />
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
    height: "100%",
    backgroundColor: "#000",
  },
  mailbox_items: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    height: "100%",
    gap: 20,
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
  },
});
