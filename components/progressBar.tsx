import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Svg, {
  Defs,
  Path,
  Stop,
  LinearGradient,
  Text as SvgText,
} from "react-native-svg";

function ProgressBar() {
  return (
    <View>
      <Svg width="114" height="20" viewBox="0 0 114 20" fill="none">
        <Path
          d="M1 10C1 5.02944 5.02944 1 10 1H103.857C108.828 1 112.857 5.02944 112.857 10C112.857 14.9706 108.828 19 103.857 19H10C5.02944 19 1 14.9706 1 10Z"
          fill="#3D3D41"
        />
        <Path
          d="M10 0.5C4.75329 0.5 0.5 4.7533 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5H103.857C109.104 19.5 113.357 15.2467 113.357 10C113.357 4.75329 109.104 0.5 103.857 0.5H10Z"
          stroke="#36363B"
        />
        <Path
          d="M37.5 1V0.5H37H10C4.7533 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.7533 19.5 10 19.5H37H37.5V19V1Z"
          fill="url(#paint0_linear_1745_813)"
          stroke="#36363B"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_1745_813"
            x1="19"
            y1="1"
            x2="19"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFB199" />
            <Stop offset="1" stopColor="#FF8E6A" />
          </LinearGradient>
        </Defs>
        <SvgText
          x="50%"
          y="50%"
          fill="white"
          textAnchor="middle"
          dy="5"
          {...styles.text}
        >
          2 / 5
        </SvgText>
      </Svg>
    </View>
  );
}

export default ProgressBar;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Quicksand-Variable",
    textShadow: "0px 2px 2px rgba(60, 32, 32, 0.25)",
  },
});
