import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";
import MembershipCard from "../components/membershipCard";
import Buttons from "../components/buttons";
import CheckBox from "../components/chekbox";

type Tmembership = "FREE" | "STANDARD" | "DELUXE";

const MembershipSetting = () => {
  const [membership, setMembership] = useState<Tmembership>("FREE");
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState({
    FREE: true,
    STANDARD: false,
    DELUXE: false,
    SOON: false,
  });

  const handleItemPress = (item: keyof typeof selected) => {
    const updatedSelect: { [key in keyof typeof selected]: boolean } = {
      FREE: false,
      STANDARD: false,
      DELUXE: false,
      SOON: false,
    };
    updatedSelect[item] = true;
    setSelected(updatedSelect);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_box}>
        <MonoText style={styles.status_text}>
          현재 멤버쉽{" "}
          <MonoText style={{ color: colors.green500 }}>{membership}</MonoText>
        </MonoText>
        <View style={{ gap: 10 }}>
          <View style={styles.membership_box}>
            <MembershipCard
              type="FREE"
              isSelected={selected.FREE}
              onPress={() => {
                handleItemPress("FREE");
              }}
            />
            <MembershipCard
              type="STANDARD"
              isSelected={selected.STANDARD}
              onPress={() => {
                handleItemPress("STANDARD");
              }}
            />
          </View>
          <View style={styles.membership_box}>
            <MembershipCard
              type="DELUXE"
              isSelected={selected.DELUXE}
              onPress={() => {
                handleItemPress("DELUXE");
              }}
            />
            <MembershipCard
              type="SOON"
              isSelected={selected.SOON}
              onPress={() => {
                handleItemPress("SOON");
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.info_box}>
        <View style={styles.info_text_box}>
          <MonoText style={styles.list_style}>⋅ </MonoText>
          <MonoText style={styles.info_text}>환불 정책 1</MonoText>
        </View>
        <View style={styles.info_text_box}>
          <MonoText style={styles.list_style}>⋅ </MonoText>
          <MonoText style={styles.info_text}>환불 정책 2</MonoText>
        </View>
        <View style={styles.info_text_box}>
          <MonoText style={styles.list_style}>⋅ </MonoText>
          <MonoText style={styles.info_text}>환불 정책 3</MonoText>
        </View>
      </View>
      <View style={styles.bottom_box}>
        <CheckBox
          text="(필수) 아래의 유의사항을 모두 확인했습니다."
          bg
          checked={checked}
          onPress={() => {
            setChecked((prevChecked) => !prevChecked);
          }}
        />
        <View style={styles.button_wrapper}>
          {checked ? (
            <Buttons color={"green"} title={"결제하기"} />
          ) : (
            <Buttons color={"grey"} title={"결제하기"} is_disable={true} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.greyblack,
    width: "100%",
    height: "100%",
    paddingTop: 33,
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 23,
    position: "relative",
  },
  top_box: {
    width: "100%",
  },
  status_text: {
    color: colors.Whiteyello,
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 20,
  },
  membership_box: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info_box: {
    width: "100%",
    marginTop: 20,
  },
  info_text_box: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  list_style: {
    fontSize: 20,
    fontWeight: "700",
    marginRight: 5,
    color: colors.Whiteyello,
  },
  info_text: {
    color: colors.Whiteyello,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
  },
  bottom_box: {
    width: "95%",
    alignItems: "flex-start",
    gap: 20,
    position: "absolute",
    bottom: 40,
  },
  button_wrapper: { height: 52, width: "100%" },
});

export default MembershipSetting;
