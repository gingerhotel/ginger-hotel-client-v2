import React from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/Colors";
import { MonoText } from "../StyledText";

type Props = {
  title: string;
  color: "red" | "green" | "white" | "disable_red";
  is_disable?: boolean;
  navigation?: any;
  url?: string;
};

const Buttons = ({ title, color, is_disable, navigation, url }: Props) => {
  return (
    <View style={cstyles(COLORS[color], color).cover}>
      <Pressable
        onPress={() => navigation.navigate(url)}
        style={[styles.button, cstyles(COLORS[color], color).background]}
        disabled={is_disable}
      >
        <MonoText style={cstyles(COLORS[color], color).text}>{title}</MonoText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 281,
    height: 29,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 2,
    borderWidth: 1.5,
  },
});

const cstyles = (color_code: string, color: string) =>
  StyleSheet.create({
    background: {
      borderColor: color === "white" ? COLORS.red : "white",
      backgroundColor: color_code,
    },
    cover: {
      backgroundColor: color_code,
      padding: 4,
      borderRadius: 5,
      marginTop: 14,
      marginBottom: 14,
      borderWidth: color === "white" ? 1.5 : 0,
      borderColor: color === "white" ? COLORS.red : "none",
    },
    text: {
      color: color === "white" ? COLORS.red : "white",
      fontSize: 14,
    },
  });

export default Buttons;
