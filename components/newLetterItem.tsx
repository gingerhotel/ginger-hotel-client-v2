import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  FlatList,
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

export const NewLetterItem = ({ letters }: any) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const modalTextList = ["답장하기", "엿보기", "사용자 차단", "편지 삭제"];
  const toggleModal = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const closeModal = () => {
    setBottomSheetVisible(false);
  };
  console.log(letters)
  return (
    <FlatList
      data={letters}
      renderItem={({ item }) =>
        <LetterOuterContainer>
          <LetterInnerContainer b_color="#FFFDF0">
            <LetterInnerInfoView>
              <LetterInnerTitieView>
                <TouchableOpacity onPress={toggleModal}>
                  <SvgImg url={iconGlassesQuestionMark} width={30} height={30} />
                </TouchableOpacity>
                <LetterInnerTitieTextView>
                  <LetterInnerSendText>보내는 이</LetterInnerSendText>
                  <LetterInnerUserText>{item.content}</LetterInnerUserText>
                </LetterInnerTitieTextView>
                <TouchableOpacity onPress={toggleModal}>
                  <SvgImg
                    url={iconMore}
                    style={styles.icon}
                    width={30}
                    height={30}
                  />
                </TouchableOpacity>
              </LetterInnerTitieView>
              <LetterInnerTextBox>
                {item.senderNickname}
              </LetterInnerTextBox>
            </LetterInnerInfoView>
          </LetterInnerContainer>
        </LetterOuterContainer>
      }
      keyExtractor={item => item.id} />
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