import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SvgImg } from "./svgImg";
const badge = require("../assets/icon/i_badge.svg");
const person = require("../assets/icon/i_person_add.svg");

const VillageHeader = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.wrapper}>
        <SvgImg url={badge} width={25} height={25} a_width={25} />
        &nbsp;&nbsp;&nbsp;
        <SvgImg url={person} width={25} height={25} a_width={25} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
});

export default VillageHeader;
