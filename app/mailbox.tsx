import { StyleSheet, Image } from "react-native";
import Buttons from "../components/Buttons/buttons";

import EditScreenInfo from "../components/EditScreenInfo";
import { MonoText } from "../components/StyledText";
import { Text, View } from "../components/Themed";
import LetterItem from "../components/LetterItem/letterItem";
import { ScrollView } from "react-native-gesture-handler";

const letter = require("../assets/images/mailbox.png");

export default function MailBox() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mailbox_header}>
          <Image source={letter} style={styles.letter_img} />
          <MonoText style={styles.title}>민지의 호텔 편지함</MonoText>
        </View>
        <View style={styles.mailbox_items}>
          <Buttons url={"mailbox"} title="진저맨 카드" color="green" />
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
          <LetterItem from={""} contents={""} is_active={false} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mailbox_header: {
    marginTop: 50,
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
    height: "70%",
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
});
