import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "./themed";
import { useThemeColor } from "./themed";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MonoText } from "./styledText";
import { colors } from "../constants/Colors";
import React from "react";
import { SvgImg } from "./svgImg";

const createHotelDecoV2 = ({ url, active }: any) => {
  const image = `../assets/decorations/${url}.svg`;

  return (
    <View style={[styles.color, active === url && styles.active]}>
      <SvgImg
        url={image}
        width={50}
        height={70}
        style={{
          width: 50,
          height: 70,
          zIndex: 4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    width: 151,
    height: 88,
    borderRadius: 12,
    backgroundColor: colors.grey900,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    borderWidth: 2,
    borderColor: colors.green400,
  },
});

export default createHotelDecoV2;
