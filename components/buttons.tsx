import { Link } from "expo-router";
import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/Colors";
import { MonoText } from "./StyledText";

type Props = {
  title: string;
  color: "red" | "green" | "white" | "disable_red";
  is_disable?: boolean;
  navigation?: any;
  url?: string;
};

const Buttons = ({ title, color, is_disable, navigation, url }: Props) => {
  return (
    // <View >

    <TouchableOpacity
      disabled={is_disable}
      style={cstyles(COLORS[color], color).button}
      onPress={() => navigation.navigate(url)}
    >
      {/* <Link
    > */}
      <MonoText style={cstyles(COLORS[color], color).text}>{title}</MonoText>
      {/* </Link> */}
    </TouchableOpacity>
    // </View>
  );
};

const cstyles = (color_code: string, color: string) =>
  StyleSheet.create({
    button: {
      width: 281,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 11,
      borderRadius: 10,
      marginTop: 14,
      marginBottom: 14,
      backgroundColor: color_code,
      borderWidth: color === "white" ? 1.5 : 0,
      borderColor: color === "white" ? COLORS.red : "none",
    },
    text: {
      color: color === "white" ? COLORS.red : "white",
      fontSize: 14,
    },
  });

export default Buttons;
