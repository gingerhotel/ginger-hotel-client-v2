import React, { useState } from "react";
import {
  DeleteModaContentlView,
  DeleteModalButtonView,
  DeleteModalView,
} from "../../style/deleteModalStyled";
import { Text, View } from "../themed";
import Modal from "react-native-modal";
import { BottomSheetProps } from "../../api/interface";
import { MonoText } from "../styledText";
import { SvgImg } from "../svgImg";
import { letterBlock, letterDelete } from "../../api/letterApi";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { letterUpdateState } from "../../atom/letterAtom";
import Buttons from "../buttons";
import { colors } from "../../constants/Colors";
const DisabledModal = ({
  isVisible,
  onClose,
  letterId,
  letterType,
}: BottomSheetProps) => {
  // const [replyCheck, setReplykCheck] = useRecoilState(letterUpdateState);
  const onReply = () => {
    // await letterBlock(letterId);
    // setReplykCheck(!replyCheck);
    onClose();
  };
  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0, backgroundColor: "transparent", height: 500 }}
      backdropOpacity={0.2}
    >
      <DeleteModalView>
        <DeleteModaContentlView>
          <MonoText
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#FFFDF0",
            }}
          >
            서비스 종료 안내
          </MonoText>
          <MonoText
            style={{
              color: colors.grey400,
              textAlign: "center",
              lineHeight: 20,
            }}
          >
            {`2023년 12월 26일부터는 편지 보내기가 불가하며\n이전에 받았던 편지 읽기만 가능합니다.`}
          </MonoText>
          <DeleteModalButtonView>
            {/* <SvgImg url={i_no} width={141} height={46} onPress={onClose} /> */}
            <Buttons
              title="취소하기"
              width={141}
              color="gray_700"
              callback={onClose}
              auth={true}
            />
          </DeleteModalButtonView>
        </DeleteModaContentlView>
      </DeleteModalView>
    </Modal>
  );
};

export default DisabledModal;
