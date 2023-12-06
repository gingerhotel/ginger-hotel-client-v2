import React, { useState } from 'react'
import { DeleteModaContentlView, DeleteModalButtonView, DeleteModalView } from '../../style/deleteModalStyled'
import { BottomSheetProps } from '../../api/interface';
import { MonoText } from '../styledText';
import { letterBlock } from '../../api/letterApi';
import { useRecoilState } from 'recoil';
import { letterUpdateState } from '../../atom/letterAtom';
import Buttons from '../buttons';
import { replyBlock } from '../../api/repliesApi';
import { Modal } from 'react-native';
const i_yes = require("../../assets/icon/i_block_yes.svg");
const i_no = require("../../assets/icon/i_no.svg");
const BlockModal = ({ isVisible, onClose, letterId, letterType, replyId }: BottomSheetProps) => {
    const [blockCheck, setBlockCheck] = useRecoilState(letterUpdateState);
    const onBlock = async () => {
        if (letterType) {

            await letterBlock(letterId);
        }
        else {
            await replyBlock(replyId);
        }
        setBlockCheck(!blockCheck);
        onClose();
    }
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
                    <MonoText style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFDF0' }}>사용자를 차단하시겠습니까?</MonoText>
                    <MonoText style={{ color: '#98989B' }}>차단한 사용자로부터는 편지를 받을 수 없어요.</MonoText>
                    <DeleteModalButtonView>
                        <Buttons
                            title='취소하기'
                            width={141}
                            color='gray_700'
                            callback={onClose}
                            auth={true}
                        />
                        {/* <SvgImg url={i_yes} width={141} height={46} onPress={onReply} /> */}
                        <Buttons
                            title='차단하기'
                            width={141}
                            color='green'
                            callback={onBlock}
                            auth={true}
                        />
                    </DeleteModalButtonView>
                </DeleteModaContentlView>
            </DeleteModalView>
        </Modal>
    )
}

export default BlockModal