import React, { useState } from 'react'
import { DeleteModaContentlView, DeleteModalButtonView, DeleteModalView } from '../../style/deleteModalStyled'
import { Text, View } from '../themed'
import Modal from 'react-native-modal';
import { BottomSheetProps } from '../../api/interface';
import { MonoText } from '../styledText';
import { SvgImg } from '../svgImg';
import { letterUnBlock } from '../../api/letterApi';
import { useRecoilState } from 'recoil';
import { letterUpdateState } from '../../atom/letterAtom';
const i_yes = require("../../assets/icon/i_clear.svg");
const i_no = require("../../assets/icon/i_no.svg");
const UnBlockModal = ({ isVisible, onClose, letterId }: BottomSheetProps) => {
    const [unBlockCheck, setUnBlockCheck] = useRecoilState(letterUpdateState);
    const onUnBlock = async () => {
        await letterUnBlock(letterId);
        setUnBlockCheck(!unBlockCheck);
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
                    <MonoText style={{ fontSize: 16, fontWeight: 'bold' }}>차단을 해제하시겠습니까?</MonoText>
                    <MonoText style={{ color: '#98989B' }}>차단을 해제하면 다시 편지를 주고 받을 수 있어요.</MonoText>
                    <DeleteModalButtonView>
                        <SvgImg url={i_no} width={141} height={46} onPress={onClose} />
                        <SvgImg url={i_yes} width={141} height={46} onPress={onUnBlock} />
                    </DeleteModalButtonView>
                </DeleteModaContentlView>
            </DeleteModalView>
        </Modal>
    )
}

export default UnBlockModal