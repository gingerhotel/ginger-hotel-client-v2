import React from "react";
import { Image, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { MonoText } from "../../components/StyledText";
import Header from "../../components/Header";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


let StartHotel = require("../../assets/images/StartHotel.svg");
let icon = require("../../assets/images/img.png");

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default function TabOneScreen() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <View style={styles.container}>
      <MonoText>빌리지 페이지 입니다.</MonoText>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </View>
    </ApolloProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  hotel_img: {
    width: 300,
    height: 400,
  },
});
