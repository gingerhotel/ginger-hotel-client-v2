import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import BottomModal from "./bottomModal";
import { MonoText } from "./styledText";
const iconMore = require("../assets/icon/i_more_vert.png");

type Props = {
  from: string;
  contents: string;
  is_active: boolean;
  navigation: any;
};

const LetterItem = ({ from, contents, is_active, navigation }: Props) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const modalTextList = ["답장하기", "엿보기", "사용자 차단", "편지 삭제"];

  const toggleModal = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const closeModal = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View style={styles.wrapper}>
      <MonoText style={styles.from_text}>
        <View style={styles.from_wrapper}>
          <MonoText>
            <MonoText style={styles.bold}>From.</MonoText> {from}
          </MonoText>

          <TouchableOpacity onPress={toggleModal}>
            <Image source={iconMore} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {"\n"}
        {"\n"}
        <MonoText style={styles.contents}>
          {contents}
        </MonoText>
      </MonoText>

      <BottomModal
        height={150}
        visible={bottomSheetVisible}
        onClose={closeModal}
        modalTextList={modalTextList}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 18,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    marginTop: 15,
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
  from_text: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contents: {
    fontSize: 13,
    lineHeight: 17,
    marginTop: 10,
  },
  from_wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default LetterItem;
