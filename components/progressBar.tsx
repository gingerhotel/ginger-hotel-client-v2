import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Svg, {
  Defs,
  Path,
  Stop,
  LinearGradient,
  Text as SvgText,
} from "react-native-svg";
import { Bar, BarText, BarView, BarViewText } from "../style/progressBarStyled";
import * as Progress from 'react-native-progress';
import { MonoText } from "./styledText";
function ProgressBar({ todayLetterCnt }: any) {
  return (
    <BarView >
      <BarViewText>
        <MonoText>{todayLetterCnt} / 5</MonoText>
      </BarViewText>
      <Bar>
        <Progress.Bar
          progress={todayLetterCnt / 5}
          width={null}
          height={20}
          color={"#FFB199"}
          borderRadius={10}
          borderColor="#1E1F23"
        />
      </Bar>
    </BarView>
  );
}

export default ProgressBar;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Quicksand-Variable",
    shadow: {
      offset: { width: 0, height: 2 },
      radius: 2,
      color: "rgba(60, 32, 32, 0.25)",
    },
  },
});
