import React from "react";

import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { MonoText } from "../../components/styledText";
import Header from "../../components/header";


export default function TabOneScreen() {
  return (
      <>
        <Header />
        <View style={styles.container}>
        <MonoText>빌리지 페이지 입니다.</MonoText>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
        </View>
      </>
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
