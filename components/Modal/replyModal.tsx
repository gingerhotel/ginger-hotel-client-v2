import React, { useState } from 'react'
import { DeleteModaContentlView, DeleteModalButtonView, DeleteModalView } from '../../style/deleteModalStyled'
import { Text, View } from '../themed'
import Modal from 'react-native-modal';
import { BottomSheetProps } from '../../api/interface';
import { MonoText } from '../styledText';
import { SvgImg } from '../svgImg';
import { letterBlock, letterDelete } from '../../api/letterApi';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { letterUpdateState } from '../../atom/letterAtom';
import Buttons from '../buttons';
const ReplyModal = ({ isVisible, onClose, letterId }: BottomSheetProps) => {
    // const [replyCheck, setReplykCheck] = useRecoilState(letterUpdateState);
    const onReply = () => {
        // await letterBlock(letterId);
        // setReplykCheck(!replyCheck);
        onClose();
    }
    return (
        <Modal
            isVisible={isVisible}
            style={{ margin: 0, backgroundColor: 'transparent' }}
            backdropOpacity={0.2}
        >
            <DeleteModalView>
                <DeleteModaContentlView>
                    <MonoText style={{ fontSize: 16, fontWeight: 'bold' }}>답장을 보낼까요?</MonoText>
                    <MonoText style={{ color: '#98989B' }}>광고를 보면 상대방에게 답장을 보낼 수 있어요!</MonoText>
                    <DeleteModalButtonView>
                        {/* <SvgImg url={i_no} width={141} height={46} onPress={onClose} /> */}
                        <Buttons
                            title='취소하기'
                            width={141}
                            color='gray_700'
                            callback={onClose}
                        />
                        {/* <SvgImg url={i_yes} width={141} height={46} onPress={onReply} /> */}
                        <Buttons
                            title='답장쓰기'
                            url={`reply/${letterId}`}
                            width={141}
                            color='green'
                            callback={onReply}
                            props={letterId}
                        />
                    </DeleteModalButtonView>
                </DeleteModaContentlView>
            </DeleteModalView>
        </Modal>
    )
}

export default ReplyModal