import * as React from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

export default function testDev() {
  

  return (
    <>
      <View>
        <Text>test dev page</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 20,
    backgroundColor: "darkgray",
    textAlign: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
