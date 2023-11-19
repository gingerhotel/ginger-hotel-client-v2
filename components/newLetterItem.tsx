import React, { useEffect, useState } from "react";
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
import { useQuery } from "react-query";
import { newLetterData } from "../api/letterApi";
import { useRecoilValue } from "recoil";
import { hotelIdState } from "../atom/letterAtom";
const iconMore = require("../assets/icon/i_more_vert.png");
const iconGlassesQuestionMark = require("../assets/icon/i_glasses_question_mark.svg");

type Props = {
  from: string; contents: string;
  is_active: boolean;
  navigation: any;
};

export const NewLetterItem = ({ from, contents, is_active, navigation }: Props) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const hotelId = useRecoilValue(hotelIdState);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // 현재 날짜를 가져오는 함수
    const getCurrentDate = () => {
      const dateObject = new Date();
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고, 두 자리로 만듭니다.
      const day = String(dateObject.getDate()).padStart(2, '0'); // 날짜도 두 자리로 만듭니다.
      return `${year}-${month}-${day}`;
    };

    // 컴포넌트가 마운트될 때 현재 날짜를 가져와 상태 업데이트
    setCurrentDate(getCurrentDate());
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행
  const { data, isLoading } = useQuery(['newLetters', { hotelId, currentDate }], () => newLetterData({ hotelId, currentDate }));
  const modalTextList = ["답장하기", "엿보기", "사용자 차단", "편지 삭제"];
  const toggleModal = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const closeModal = () => {
    setBottomSheetVisible(false);
  };

  return (
    <LetterOuterContainer>
      <LetterInnerContainer>
        <LetterInnerInfoView>
          <LetterInnerTitieView>
            <TouchableOpacity onPress={toggleModal}>
              <SvgImg url={iconGlassesQuestionMark} width={30} height={30} />
            </TouchableOpacity>
            <LetterInnerTitieTextView>
              <LetterInnerSendText>보내는 이</LetterInnerSendText>
              <LetterInnerUserText>로운로운</LetterInnerUserText>
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
            메리 크리스마스~~! 잘 지내고 계신가요. 바빠 보이시는데 기력두 잘
            챙기면서 23년 마무리 같이 으쌰으쌰 해봅시다 앞으로도 잘부탁해용
            테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용
            편지테스트용 편지테스트용 편지테스트용 편지테스트용 편지테스트용
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
