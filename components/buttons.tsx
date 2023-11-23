import { Link, router } from "expo-router";
import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { MonoText } from "./styledText";
import { Common_Colors } from "../constants/Colors";
import { SvgImg } from "./svgImg";

type Props = {
  title: string;
  color:
    | "red"
    | "darkgray"
    | "grey"
    | "green"
    | "white"
    | "disable_red"
    | "gray_700"
    | "neongreen";
  is_disable?: boolean;
  url?: string;
  callback?: any;
  is_width?: boolean;
  width?: any;
  props?: any;
  icon?: string;
};

const Buttons = ({
  title,
  color,
  is_disable,
  url,
  callback,
  width,
  props,
  icon,
}: Props) => {
  const handlePress = () => {
    if (url) {
      router.replace(`/${url}`);
    }

    if (callback) {
      callback();
    }
  };

  return (
    <TouchableOpacity
      disabled={is_disable}
      style={cstyles(Common_Colors[color], color, width).button}
      onPress={handlePress}
    >
      <View style={styles.item}>
        {icon ? (
          <SvgImg
            width={24}
            height={24}
            url={icon}
            style={{ marginRight: 8 }}
          />
        ) : null}
        <MonoText style={cstyles(Common_Colors[color], color, width).text}>
          {title}
        </MonoText>
      </View>
    </TouchableOpacity>
  );
};

const cstyles = (color_code: string, color: string, width: number) =>
  StyleSheet.create({
    button: {
      width: width ? width : "100%",
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: 52,
      borderRadius: 6,
      backgroundColor: color_code,
      borderWidth: color === "white" ? 1.5 : 0,
    },
    text: {
      color: color === "white" ? Common_Colors.red : "white",
      fontSize: 16,
      paddingTop: 3,
    },
  });

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    rowGap: 8,
  },
});

export default Buttons;
