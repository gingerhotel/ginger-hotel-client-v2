import { StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "../constants/Colors";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: colors.greyblack,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});