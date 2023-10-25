import * as React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import CreateHeader from "../components/createHeader";

export default function Create({ navigation }: any) {
  return (
    <View style={styles.container}>
      <CreateHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 60,
    flex: 1,
    justifyContent: "flex-start",
  },
});
