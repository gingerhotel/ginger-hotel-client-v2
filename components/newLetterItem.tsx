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
import {
  LetterInnerContainer,
  LetterInnerInfoView,
  LetterInnerSendText,
  LetterInnerTextBox,
  LetterInnerTitieTextView,
  LetterInnerTitieView,
  LetterInnerUserText,
  LetterOuterContainer
} from "../style/letterItemStyled";
import { SvgImg } from "./svgImg";
const iconMore = require("../assets/icon/i_more_vert.png");
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");

type Props = {
  from: string; contents: string;
  is_active: boolean;
  navigation: any;
};

const NewLetterItem = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const modalTextList = ["답장하기", "엿보기", "사용자 차단", "편지 삭제"];

  const toggleModal = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const closeModal = () => {
    setBottomSheetVisible(false);
  };

  return (
    <LetterOuterContainer>
      <LetterInnerContainer b_color="#FFFDF0">
        <LetterInnerInfoView>
          <LetterInnerTitieView>
            <TouchableOpacity onPress={toggleModal}>
              <SvgImg url={iconGlassesQuestionMark} />
            </TouchableOpacity>
            <LetterInnerTitieTextView>
              <LetterInnerSendText f_color="#4A4A4E">보내는 이</LetterInnerSendText>
              <LetterInnerUserText f_color="#25796B">로운로운</LetterInnerUserText>
            </LetterInnerTitieTextView>
            <TouchableOpacity onPress={toggleModal} style={{ position: 'absolute', left: 312 }}>
              <Image source={iconMore} style={styles.icon} />
            </TouchableOpacity>
            <View />
          </LetterInnerTitieView>
          <LetterInnerTextBox f_color="#000">
            메리 크리스마스~~! 잘 지내고 계신가요. 바빠 보이시는데 기력두 잘 챙기면서
            23년 마무리 같이 으쌰으쌰 해봅시다 앞으로도 잘부탁해용 테스트용 편지테스트용
            편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용
          </LetterInnerTextBox>
        </LetterInnerInfoView>
      </LetterInnerContainer>
    </LetterOuterContainer>
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

export default NewLetterItem;
