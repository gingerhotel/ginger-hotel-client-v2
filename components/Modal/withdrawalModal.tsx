
import React, { useState } from "react";
import {
    DeleteModaContentlView,
    DeleteModalButtonView,
    DeleteModalView,
} from "../../style/deleteModalStyled";
import { Text, View } from "../themed";
import { BottomSheetProps } from "../../api/interface";
import { MonoText } from "../styledText";
import { SvgImg } from "../svgImg";
import { letterDelete } from "../../api/letterApi";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { letterUpdateState } from "../../atom/letterAtom";
import Buttons from "../buttons";
import { Modal } from "react-native";
const WithdrawalModal = ({
    isVisible,
    onClose,
    letterId,
}: BottomSheetProps) => {
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
                    <MonoText style={{ fontSize: 16, fontWeight: "bold", color: '#FFFDF0' }}>
                        답장을 보낼 수 없어요!
                    </MonoText>
                    <MonoText style={{ color: "#98989B" }}>
                        상대방이 나를 차단했어요!
                    </MonoText>
                    <DeleteModalButtonView>
                        <Buttons
                            title='확인'
                            width={141}
                            color='green'
                            callback={onClose}
                            auth={true}
                        />
                    </DeleteModalButtonView>
                </DeleteModaContentlView>
            </DeleteModalView>
        </Modal>
    );
};

export default WithdrawalModal;
