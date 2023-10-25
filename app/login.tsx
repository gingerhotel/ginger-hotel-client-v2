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

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <LetterHeader marginTop={100} isTitle={false} />
      <ScrollView>
        <View style={styles.mailbox_items}>
          <TextInput
            style={styles.letter}
            multiline={true}
            numberOfLines={20}
            placeholder="id"
          />
          <TextInput
            style={styles.input}
            placeholder="pw"
          />
          <Buttons
            navigation={navigation}
            url={"completed"}
            title="login"
            color="green"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    height: "100%",
  },
  mailbox_items: {
    backgroundColor: "#D9D9D9",
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
