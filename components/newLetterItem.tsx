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
import BottemSheet from "./bottemSheet";
import { LetterArrayProps } from "../api/interface";
const iconMore = require("../assets/icon/i_more_vert.svg");
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");
const i_block = require("../assets/icon/i_block.svg");
type Props = {
  from: string; contents: string;
  is_active: boolean;
};

export const NewLetterItem = ({ letters }: any) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [letterId, setLetterId] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const modalTextList = ["답장하기", "엿보기", "사용자 차단", "편지 삭제"];
  const toggleModal = (props: LetterArrayProps) => {
    setBottomSheetVisible(true);
    setLetterId(props.id);
    setBlocked(props.isBlocked);
  };

  const closeModal = () => {
    setBottomSheetVisible(false);
  };
  return (
    <>
      <FlatList
        data={letters}
        renderItem={({ item }) =>
          <LetterOuterContainer>
            <LetterInnerContainer b_color="#FFFDF0">
              <LetterInnerInfoView>
                <LetterInnerTitieView>
                  <TouchableOpacity onPress={() => toggleModal(item.id)}>
                    <SvgImg url={iconGlassesQuestionMark} width={30} height={30} />
                  </TouchableOpacity>
                  <LetterInnerTitieTextView>
                    <LetterInnerSendText f_color="#4A4A4E">보내는 이</LetterInnerSendText>
                    <LetterInnerUserText f_color="#25796B">{item.senderNickname}</LetterInnerUserText>
                  </LetterInnerTitieTextView>
                  <View style={{ position: 'absolute', right: '-3%' }}>
                    <SvgImg
                      url={iconMore}
                      width={30}
                      height={30}
                      onPress={() => toggleModal(item)}
                    />
                  </View>
                  {item.isBlocked ? (
                    <SvgImg
                      url={i_block}
                      width={30}
                      height={30}
                    // onPress={() => toggleModal(item.id)}
                    />
                  ) : (<View />)}
                </LetterInnerTitieView>
              </LetterInnerInfoView>
              <LetterInnerTextBox f_color="#36363B">
                {item.content}
              </LetterInnerTextBox>
            </LetterInnerContainer>
          </LetterOuterContainer>
        }
        keyExtractor={item => item.id.toString()} />
      <BottemSheet isVisible={bottomSheetVisible} onClose={closeModal} letterId={letterId} blocked={blocked}></BottemSheet>
    </>
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