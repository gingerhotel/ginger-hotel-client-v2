import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { colors } from "../constants/Colors";
import { MonoText } from "./styledText";
import { FontAwesome } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";

const frameImage = require("../assets/images/ginger_card_frame.svg");
const defaultGingerman = require("../assets/gingerman/g_bellboy.png");

type TGingermanCard = {
  isOpened?: boolean;
  pngImage?: { uri: string };
  name?: string;
  date?: string;
  onPress?: () => void;
};

const GingermanCard = ({
  name,
  pngImage = { uri: defaultGingerman },
  date,
  isOpened,
  onPress,
}: TGingermanCard) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card_wrapper}>
        {isOpened ? (
          <>
            <View style={styles.frame_wrapper}>
              {Platform.OS === "ios" || Platform.OS === "android" ? (
                <WithLocalSvg asset={frameImage} />
              ) : (
                <Image source={frameImage} />
              )}
              <Image source={pngImage} style={styles.image} />
            </View>
            <MonoText style={styles.name}>{name}</MonoText>
            <MonoText style={styles.date}>{date}</MonoText>
          </>
        ) : (
          <>
            <View style={styles.frame_wrapper}>
              {Platform.OS === "ios" || Platform.OS === "android" ? (
                <WithLocalSvg asset={frameImage} />
              ) : (
                <Image source={frameImage} />
              )}
              <FontAwesome name="question" style={styles.question_mark} />
            </View>
            <MonoText style={styles.name}>{"??? 진저맨"}</MonoText>
            <MonoText style={styles.date}>{date}</MonoText>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card_wrapper: {
    width: 114,
    height: 176,
    backgroundColor: colors.grey900,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey700,
    alignItems: "flex-start",
    padding: 10,
    gap: 5,
    marginBottom: 10,
  },
  frame_wrapper: {
    position: "relative",
    alignSelf: "center",
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  question_mark: {
    position: "absolute",
    fontSize: 100,
    top: 5,
    left: 12,
    color: colors.grey700,
  },

  name: {
    fontSize: 12,
    marginTop: 5,
    color: colors.Whiteyello,
  },
  date: {
    color: colors.green500,
    fontSize: 12,
  },
});

export default GingermanCard;
