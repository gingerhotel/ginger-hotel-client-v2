import React from "react";
import { StyleSheet, Image, Button, ScrollView, View } from "react-native";
import Buttons from "../components/buttons";
import NewLetterItem from "../components/newLetterItem";
import MailHeader from "../components/mailHeader";
import ReplyLetterItem from "../components/replyLetterItem";
import { useRecoilValue } from "recoil";
import { letterSwitchState, replyBoxSwitchState } from "../atom/letterAtom";
import ReplyHeader from "../components/replyHeader";

export default function MailBox({ navigation }: any) {
  const letterRender = useRecoilValue(letterSwitchState)
  const replyGo = useRecoilValue(replyBoxSwitchState)
  return (
    <View style={styles.container}>
      {replyGo ? (
        <ReplyHeader marginTop={50} navigation={navigation} />
      ) : (
        <MailHeader marginTop={50} navigation={navigation} />
      )}

      <ScrollView>
        <View style={styles.mailbox_items}>
          {/* {letterRender.new ? (
            <NewLetterItem
              from={""}
              contents={""}
              is_active={false}
              navigation={undefined}
            />
          ) : (
            <ReplyLetterItem />
          )} */}
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
