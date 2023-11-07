import { Link } from "expo-router";
import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { buttons_color, buttons_text } from "../constants/Colors";
import { MonoText } from "./styledText";

type Props = {
  title: string;
  color: "green" | "darkgray" | "gray" | "neongreen";
  is_disable?: boolean;
  navigation?: any;
  url?: string;
  callback?: any;
  is_width?: boolean;
};

const Buttons = ({
  title,
  color,
  is_disable,
  navigation,
  url,
  callback,
  is_width,
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
      style={cstyles(buttons_color[color], color, is_width).button}
      onPress={handlePress}
    >
      <MonoText style={cstyles(buttons_text[color], color).text}>
        {title}
      </MonoText>
    </TouchableOpacity>
  );
};

const cstyles = (color_code: string, color: string, is_width?: boolean) =>
  StyleSheet.create({
    button: {
      width: is_width ? "auto" : 281,
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 11,
      borderRadius: 10,
      marginTop: 14,
      backgroundColor: color_code,
      borderWidth: color === "white" ? 1.5 : 0,
    },
    text: {
      color: color_code,
      fontSize: 14,
    },
  });

export default Buttons;
