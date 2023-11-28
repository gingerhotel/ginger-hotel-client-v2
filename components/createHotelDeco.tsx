import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "./themed";
import { useThemeColor } from "./themed";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MonoText } from "./styledText";
import { colors } from "../constants/Colors";
import React from "react";
import { SvgImg } from "./svgImg";

const CreateHotelDeco = ({ url, active, activeTitle }: any) => {
  const image =
    activeTitle === "마당장식" || activeTitle === "뒷배경"
      ? `../assets/decorations/${url}.svg`
      : `../assets/images/${url}.svg`;

  return (
    <View style={[styles.color, active === url && styles.active]}>
      <SvgImg
        url={image}
        width={85}
        height={85}
        style={{
          width: 85,
          height: 85,
          zIndex: 4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    width: 100,
    height: 98,
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
