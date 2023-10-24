import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MonoText } from "./StyledText";
let icon = require("../assets/icon/i_favorite.png");

const Header = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.wrapper}>
          <View style={styles.item}></View>
          <View style={styles.item}>
            <MonoText style={styles.text}>도착한 편지</MonoText>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate("push")}>
              <Image style={styles.icon} source={icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginTop: 30,
    backgroundColor: "white",
  },
  item: {
    width: "100%",
    fontFamily: "Pretendard-Regular",
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Header;
