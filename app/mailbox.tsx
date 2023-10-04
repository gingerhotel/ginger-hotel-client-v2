import React, { useState } from "react";
import { StyleSheet, Image, Button, ScrollView, View } from "react-native";
import Buttons from "../components/buttons";
import LetterItem from "../components/letterItem";
import MailHeader from "../components/mailHeader";
import { BottomSheet } from "react-native-btr";
import BottomModal from "../components/BottomModal";

export default function MailBox() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleModal = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const closeModal = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View style={styles.container}>
      <MailHeader />
      <View style={styles.btn_wrapper}>
        <Buttons url={"gingercard"} title="진저맨 카드" color="green" />
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
      <Button onPress={toggleModal} title="Show Bottom Sheet" />
      {/* BottomModal 컴포넌트를 사용합니다. */}
      <BottomModal
        height={150}
        visible={bottomSheetVisible}
        onClose={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mailbox_header: {
    marginTop: 30,
    width: "100%",
    height: 145,
    backgroundColor: "#D9D9D9",
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    display: "flex",
    flexDirection: "column",
    padding: 30,
    alignItems: "center",
  },
  mailbox_items: {
    backgroundColor: "white",
    // height: "70%",
    padding: 15,
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
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
