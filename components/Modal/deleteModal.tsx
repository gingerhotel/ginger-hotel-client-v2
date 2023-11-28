import React, { useState } from 'react'
import { DeleteModaContentlView, DeleteModalButtonView, DeleteModalView } from '../../style/deleteModalStyled'
import { Text, View } from '../themed'
import Modal from 'react-native-modal';
import { BottomSheetDeleteProps } from '../../api/interface';
import { MonoText } from '../styledText';
import { SvgImg } from '../svgImg';
import { letterDelete } from '../../api/letterApi';
import { useMutation, useQueryClient } from 'react-query';
const i_yes = require("../../assets/icon/i_yes.svg");
const i_no = require("../../assets/icon/i_no.svg");
const DeleteModal = ({ isVisible, onClose, letterId }: BottomSheetDeleteProps) => {
    const deleteMutation = useMutation((letterId: any) => letterDelete(letterId));
    const onDelelet = async () => {
        await letterDelete(letterId);
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
                    <MonoText style={{ fontSize: 16, fontWeight: 'bold' }}>편지를 삭제하시겠습니까?</MonoText>
                    <MonoText style={{ color: '#98989B' }}>한번 삭제한 편지는 복구가 불가해요.</MonoText>
                    <View style={{ backgroundColor: 'transparent' }}>
                        <MonoText style={{ color: '#98989B' }}>해당 편지로부터 시작된 답장이 있다면</MonoText>
                        <MonoText style={{ color: '#98989B' }}>주고 받은 답장이 전부 사라져요!</MonoText>
                    </View>
                    <DeleteModalButtonView>
                        <SvgImg url={i_no} width={141} height={46} onPress={onClose} />
                        <SvgImg url={i_yes} width={141} height={46} onPress={onDelelet} />
                    </DeleteModalButtonView>
                </DeleteModaContentlView>
            </DeleteModalView>
        </Modal>
    )
}

export default DeleteModal