import React, { useState } from 'react'
import { DeleteModaContentlView, DeleteModalButtonView, DeleteModalView } from '../../style/deleteModalStyled'
import { Text, View } from '../themed'
import Modal from 'react-native-modal';
import { BottomSheetDeleteProps } from '../../api/interface';
import { MonoText } from '../styledText';
import { SvgImg } from '../svgImg';
import { letterBlock, letterDelete } from '../../api/letterApi';
import { useMutation, useQueryClient } from 'react-query';
const i_yes = require("../../assets/icon/i_block_yes.svg");
const i_no = require("../../assets/icon/i_no.svg");
const BlockModal = ({ isVisible, onClose, letterId }: BottomSheetDeleteProps) => {
    const deleteMutation = useMutation((letterId: any) => letterBlock(letterId));
    const onDelelet = async () => {
        deleteMutation.mutate(letterId)
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
                    <MonoText style={{ fontSize: 16, fontWeight: 'bold' }}>사용자를 차단하시겠습니까?</MonoText>
                    <MonoText style={{ color: '#98989B' }}>한번 삭제한 편지는 복구가 불가해요.</MonoText>
                    <DeleteModalButtonView>
                        <SvgImg url={i_no} width={141} height={46} onPress={onClose} />
                        <SvgImg url={i_yes} width={141} height={46} onPress={onDelelet} />
                    </DeleteModalButtonView>
                </DeleteModaContentlView>
            </DeleteModalView>
        </Modal>
    )
}

export default BlockModal