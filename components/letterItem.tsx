import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { COLORS } from "../constants/Colors";
import BottomModal from "./BottomModal";
import { MonoText } from "./StyledText";
const iconMore = require("../assets/icon/i_more_vert.svg");

type Props = {
  from: string;
  contents: string;
  is_active: boolean;
};

const LetterItem = ({ from, contents, is_active }: Props) => {
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
            <MonoText style={styles.bold}>From.</MonoText> 로온로온
          </MonoText>
          {Platform.OS === "ios" || Platform.OS === "android" ? (
            <TouchableOpacity onPress={toggleModal}>
              <WithLocalSvg asset={iconMore} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleModal}>
              <Image source={iconMore} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>
        {"\n"}
        {"\n"}
        <MonoText style={styles.contents}>
          작년 겨울에 진저호텔 덕분에 따뜻한 겨울을 보낸 유저입니다! 이번
          sef2023에 진저호텔 팀이 연사로 참여한다고 해서 너무 궁금했어요.
          진저호텔 덕분에 저도 IT 서비스 개발에 관심이 생겨서 동아리도 가입하고
          개발을 열심히 배우고 있어요. 저에게 새로움 꿈을 만들어 준 진저호텔에게
          감사해요! :)
        </MonoText>
      </MonoText>

      <BottomModal
        height={150}
        visible={bottomSheetVisible}
        onClose={closeModal}
        modalTextList={modalTextList}
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
