import React, { useState } from 'react'
import { DeleteModaContentlView, DeleteModalButtonView, DeleteModalView } from '../../style/deleteModalStyled'
import { BottomSheetProps } from '../../api/interface';
import { MonoText } from '../styledText';
import Buttons from '../buttons';
import { colors } from "../../constants/Colors";
import { Modal } from 'react-native';
const ReplyModal = ({ isVisible, onClose, letterId, letterType }: BottomSheetProps) => {
  // const [replyCheck, setReplykCheck] = useRecoilState(letterUpdateState);
  const onReply = () => {
    // await letterBlock(letterId);
    // setReplykCheck(!replyCheck);
    onClose();
  };
  return (
    <Modal
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}
      animationType="fade"
      transparent={true}
    >
      <DeleteModalView>
        <DeleteModaContentlView>
          <MonoText
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: '#FFFDF0'
            }}
          >
            답장을 보낼까요?
          </MonoText>
          <MonoText style={{ color: colors.grey400 }}>
            답장은 친구의 오늘자 편지함에 전달돼요!
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
            {/* <SvgImg url={i_yes} width={141} height={46} onPress={onReply} /> */}
            <Buttons
              title="답장쓰기"
              url={`reply/${letterId}`}
              width={141}
              color="green"
              callback={onReply}
              props={letterId}
              auth={true}
            />
          </DeleteModalButtonView>
        </DeleteModaContentlView>
      </DeleteModalView>
    </Modal>
  );
};

export default ReplyModal