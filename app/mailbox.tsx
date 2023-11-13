import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Button, ScrollView, View } from "react-native";
import Buttons from "../components/buttons";
import LetterItem from "../components/letterItem";
import MailHeader from "../components/mailHeader";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MailBox({ navigation }: any) {
  const [letters, setLetters] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  
  useEffect(() => {
    AsyncStorage.getItem(
      'accessToken', //String 타입
      (err, result) => {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result}`;
    });

    const loadLetters = async () => {
      const result = await axios.get(`http://127.0.0.1:8080/letters/hotel/2?hotelId=2&date=2023-11-13`);
      return result.data.letters;
    }
    loadLetters().then(result => setLetters(result)).then(() => setIsLoaded(true));
  }, []);
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

      {
      isLoaded &&      
      letters.map((letter)=> (
        <View style={styles.mailbox_items}>

        <LetterItem
          navigation={navigation}
          from={letter.senderNickname}
          contents={letter.content}
          is_active={false}
        />
      </View>
        )
      )

      }
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
