import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Buttons from "../components/buttons";
import Chip from "../components/chip";
import CreateHeader from "../components/createHeader";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";

export default function createHotelSelect({ navigation }: any) {
  const sex_chip = ["선택안함", "여성", "남성"];
  const [activeChip, setChip] = React.useState("선택안함");

  return (
    <View style={styles.container}>
      <CreateHeader isActiveNumber={3} />
      <View style={styles.edit_wrapper}>
        <MonoText style={styles.title}>선택 정보를 입력해주세요</MonoText>

        <MonoText style={styles.input_title}>성별</MonoText>
        <View style={styles.chip_wrapper}>
          {sex_chip?.map((text, index) => (
            <TouchableOpacity key={index} onPress={() => setChip(text)}>
              <Chip text={text} active={activeChip} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.btn_wrapper}>
        <Buttons
          navigation={navigation}
          url={"hotelagree"}
          title="다음으로"
          color="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    backgroundColor: "rgba(30,31,35,1.00)",
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
  edit_wrapper: {
    marginTop: 40,
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    color: colors.Whiteyello,
  },
  input_title: {
    marginTop: 40,
    marginBottom: 16,
    color: colors.Whiteyello,
    fontSize: 16,
  },

  btn_wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 70,
    position: "absolute",
    bottom: 30,
    left: 0,
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  chip_wrapper: {
    display: "flex",
    flexDirection: "row",
  },
});
