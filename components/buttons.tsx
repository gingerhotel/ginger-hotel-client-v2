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
import { MonoText } from "./styledText";

type Props = {
  title: string;
  color: "red" | "green" | "white" | "disable_red" | "gray_700";
  is_disable?: boolean;
  navigation?: any;
  url?: string;
  callback?: any;
  width?: any;
};

const Buttons = ({
  title,
  color,
  is_disable,
  navigation,
  url,
  callback,
  width,

}: Props) => {
  const handlePress = () => {
    // 이동하고자 하는 내비게이션 화면 이름이 지정되어 있을 때 내비게이션 이동
    if (url) {
      navigation.navigate(url);
    }

    // 사용자 정의 콜백 함수 실행
    if (callback) {
      callback();
    }
  };

  return (
    <TouchableOpacity
      disabled={is_disable}
      style={cstyles(COLORS[color], color, width).button}
      onPress={handlePress}
    >
      <MonoText style={cstyles(COLORS[color], color, width).text}>{title}</MonoText>
    </TouchableOpacity>
  );
};

const cstyles = (color_code: string, color: string, width: number) =>
  StyleSheet.create({
    button: {
      width: width,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: 52,
      borderRadius: 10,
      backgroundColor: color_code,
      borderWidth: color === "white" ? 1.5 : 0,
      borderColor: color === "white" ? COLORS.red : "none",
    },
    text: {
      color: color === "white" ? COLORS.red : "white",
      fontSize: 16,
    },
  });

export default Buttons;
