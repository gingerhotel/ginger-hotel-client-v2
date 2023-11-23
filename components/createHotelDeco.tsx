import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "./themed";
import { useThemeColor } from "./themed";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MonoText } from "./styledText";
import { colors } from "../constants/Colors";
import React from "react";
import { SvgImg } from "./svgImg";

const CreateHotelDeco = ({ url, active }: any) => {
  const image = require(`../assets/decorations/select_building1.svg`);

  return (
    <View style={[styles.color, active === url && styles.active]}>
      <SvgImg
        url={image}
        width={100}
        height={100}
        style={{
          width: 90,
          height: 90,
          zIndex: 4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    width: 110,
    height: 108,
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

export default CreateHotelDeco;
