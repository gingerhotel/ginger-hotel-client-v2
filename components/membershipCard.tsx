import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MonoText } from "./styledText";
import { colors } from "../constants/Colors";

type TmembershipCard = {
  type: "FREE" | "STANDARD" | "DELUXE" | "SOON";
  isSelected: boolean;
  onPress: () => void;
};

const checkImage = require("../assets/icon/i_check_green.png");

const FreeContent = () => {
  return (
    <View>
      <MonoText style={styles.title}>FREE</MonoText>
      <View style={styles.main_text}>
        <MonoText
          style={{ fontWeight: "700", fontSize: 24, color: colors.green400 }}
        >
          무료
        </MonoText>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.info_box}>
        <View style={styles.text_box}>
          <MonoText style={styles.info_text}>일일 편지 수신 20개</MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
        <View style={styles.text_box}>
          <MonoText style={styles.info_text}>엿보기 구매</MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
      </View>
    </View>
  );
};

const StandardContent = () => {
  return (
    <View>
      <MonoText style={styles.title}>STANDARD</MonoText>
      <View style={styles.main_text}>
        <MonoText
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: colors.green400,
            marginLeft: 10,
            position: "relative",
          }}
        >
          <MonoText
            style={{
              fontSize: 10,
              position: "absolute",
              left: -10,
              top: 3,
              color: colors.green400,
            }}
          >
            ￦{" "}
          </MonoText>
          4,900
          <MonoText style={{ fontSize: 10, color: colors.Whiteyello }}>
            /25일
          </MonoText>
        </MonoText>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.info_box}>
        <View style={styles.text_box}>
          <MonoText style={[styles.info_text, { color: colors.green400 }]}>
            무료 멤버쉽의 모든 기능
          </MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
        <View style={styles.text_box}>
          <MonoText style={styles.info_text}>일일 편지 수신 무제한</MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
      </View>
    </View>
  );
};

const DeluxeContent = () => {
  return (
    <View>
      <MonoText style={styles.title}>DELUXE</MonoText>
      <View style={styles.main_text}>
        <MonoText
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: colors.green400,
            marginLeft: 10,
            position: "relative",
          }}
        >
          <MonoText
            style={{
              fontSize: 10,
              position: "absolute",
              left: -10,
              top: 3,
              color: colors.green400,
            }}
          >
            ￦{" "}
          </MonoText>
          5,900
          <MonoText style={{ fontSize: 10, color: colors.Whiteyello }}>
            /25일
          </MonoText>
        </MonoText>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.info_box}>
        <View style={styles.text_box}>
          <MonoText style={[styles.info_text, { color: colors.green400 }]}>
            STANDARD의 모든 기능
          </MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
        <View style={styles.text_box}>
          <MonoText style={styles.info_text}>편지 이미지 첨부</MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
        <View style={styles.text_box}>
          <MonoText style={styles.info_text}>편지 답장하기</MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
      </View>
    </View>
  );
};

const SoonContent = () => {
  return (
    <View>
      <MonoText style={styles.title}>SOON</MonoText>
      <View style={styles.main_text}>
        <MonoText
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: colors.green400,
            marginLeft: 10,
            position: "relative",
          }}
        >
          <MonoText
            style={{
              fontSize: 10,
              position: "absolute",
              left: -10,
              top: 3,
              color: colors.green400,
            }}
          >
            ￦{" "}
          </MonoText>
          9,900
          <MonoText style={{ fontSize: 10, color: colors.Whiteyello }}>
            /25일
          </MonoText>
        </MonoText>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.info_box}>
        <View style={styles.text_box}>
          <MonoText style={[styles.info_text, { color: colors.green400 }]}>
            DELUXE의 모든 기능
          </MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
        <View style={styles.text_box}>
          <MonoText style={styles.info_text}>미정</MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
        <View style={styles.text_box}>
          <MonoText style={styles.info_text}>미정</MonoText>
          <Image source={checkImage} style={styles.check_style} />
        </View>
      </View>
    </View>
  );
};

const MembershipCard = ({ type, isSelected, onPress }: TmembershipCard) => {
  return (
    <View
      style={[styles.container, isSelected ? styles.selected_border : null]}
    >
      <TouchableOpacity onPress={onPress}>
        {type === "FREE"
          ? FreeContent()
          : type === "STANDARD"
          ? StandardContent()
          : type === "DELUXE"
          ? DeluxeContent()
          : SoonContent()}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "48.5%",
    height: 180,
    borderRadius: 12,
    borderColor: colors.grey600,
    borderWidth: 1,
    backgroundColor: colors.grey900,
    padding: 15,
  },
  selected_border: {
    borderColor: colors.green400,
  },

  title: {
    fontWeight: "700",
    fontSize: 10,
    color: colors.Whiteyello,
  },
  main_text: { marginVertical: 20 },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grey800,
    marginBottom: 10,
  },
  info_box: {},
  info_text: {
    fontWeight: "400",
    fontSize: 10,
    color: colors.Whiteyello,
  },
  text_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  check_style: {
    width: 15,
    height: 15,
  },
});

export default MembershipCard;
