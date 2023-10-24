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
  color: "red" | "green" | "white" | "disable_red";
  is_disable?: boolean;
  navigation?: any;
  url?: string;
  callback?: any;
};

const Buttons = ({
  title,
  color,
  is_disable,
  navigation,
  url,
  callback,
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
      style={cstyles(COLORS[color], color).button}
      onPress={handlePress}
    >
      <MonoText style={cstyles(COLORS[color], color).text}>{title}</MonoText>
    </TouchableOpacity>
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
