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
import { colors } from "../constants/Colors";

function Letter({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* <LetterHeader marginTop={100} isTitle={false} /> */}
      <ScrollView>
        <View style={styles.mailbox_items}>
          <TextInput
            style={styles.letter}
            multiline={true}
            numberOfLines={20}
            placeholder="전하고 싶은 말을 적어주세요!"
          />
          <TextInput
            style={styles.input}
            placeholder="닉네임을 입력하세요 (10자 이하)"
          />
          <Buttons url={"gingercard"} title="이미지 첨부" color="darkgray" />
          <Buttons
            navigation={navigation}
            url={"completed"}
            title="보내기"
            color="green"
          />
        </View>
      </ScrollView>
    </View>
  );
}

Letter.navigationOptions = {
  title: "타이틀1",
};

export default Letter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyblack,
    height: "100%",
  },
  mailbox_items: {
    backgroundColor: colors.greyblack,
    padding: 15,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  letter: {
    width: 300,
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
  },
  input: {
    width: 300,
    backgroundColor: "white",
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
