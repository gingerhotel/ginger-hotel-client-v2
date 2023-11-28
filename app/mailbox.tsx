import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import NewLetterItem from "../components/newLetterItem";
import MailHeader from "../components/mailHeader";
import ReplyLetterItem from "../components/replyLetterItem";
import { useRecoilValue } from "recoil";
import { hotelIdState, letterSwitchState, replyBoxSwitchState } from "../atom/letterAtom";
import ReplyHeader from "../components/replyHeader";
import { useQuery } from "react-query";
import { newLetterData } from "../api/letterApi";

export default function MailBox({ navigation }: any) {
  const letterRender = useRecoilValue(letterSwitchState)
  const replyGo = useRecoilValue(replyBoxSwitchState)
  const hotelId = useRecoilValue(hotelIdState);
  const { data, isLoading, refetch } = useQuery('newLetters', async () =>
    await newLetterData({ hotelId }
    ), {
    enabled: true
  }
  );

  const [newLettersData, setNewLetters] = useState(data);
  useEffect(() => {
    setNewLetters(data);
    return () => {
      refetch();
    }
  }, [data])
  return (
    <View style={styles.container}>
      {replyGo ? (
        <ReplyHeader marginTop={50} navigation={navigation} />
      ) : (
        <MailHeader marginTop={50} navigation={navigation} />
      )}
      <ScrollView>
        <View style={styles.mailbox_items}>
          {letterRender.new ? (
            isLoading ? (<Text>로딩...</Text>) : (<NewLetterItem letters={newLettersData?.letters} />)
          ) : (
            <ReplyLetterItem />
          )}
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
