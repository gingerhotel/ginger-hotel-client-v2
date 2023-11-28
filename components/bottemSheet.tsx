// BottomSheet.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SvgImg } from './svgImg';
import { BottemSheetBorderView, BottemSheetContentView, BottemSheetDraeView, BottemSheetElementView, BottemSheetView } from '../style/bottemSheetStyled';
import { MonoText } from './styledText';
import DeleteModal from './Modal/deleteModal';
import { BottomSheetDeleteProps, BottomSheetProps } from '../api/interface';
import BlockModal from './Modal/blockModal';


const i_drag = require("../assets/icon/i_drag_handle.svg");
const i_incognito = require("../assets/icon/i_incognito.svg");
const i_peek = require("../assets/icon/i_peek.svg");
const i_reply_plus = require("../assets/icon/i_reply_plus.svg");
const i_delete = require("../assets/icon/i_delete.svg");
const i_pro = require("../assets/icon/i_pro.svg");
const BottomSheet = ({ isVisible, onClose, letterId }: BottomSheetDeleteProps) => {
    const [letterDelete, setLetterDelete] = useState(false)
    const [letterBlock, setLetterBlock] = useState(false)
    const handleSwipeMove = (gestureState: any) => {
        console.log(gestureState.dy);
    };
    const handleDelete = () => {
        setLetterDelete(true)
        onClose()
    }
    const handleBlock = () => {
        setLetterBlock(true)
        onClose()
    }
    const closeModal = () => {
        setLetterDelete(false)
        setLetterBlock(false)
    }
    console.log(letterId);
    return (
        <>
            <Modal
                isVisible={isVisible}
                onSwipeComplete={onClose}
                swipeDirection={['down', 'up']}
                onSwipeMove={handleSwipeMove}
                onSwipeStart={() => console.log('Swipe started')}
                style={{ margin: 0, backgroundColor: 'transparent' }}
                backdropOpacity={0.2}
            >
                <BottemSheetView>
                    <BottemSheetContentView>
                        <BottemSheetDraeView >
                            <SvgImg url={i_drag} width={32} height={4} onPress={onClose} />
                        </BottemSheetDraeView>
                        <BottemSheetBorderView>
                            <BottemSheetElementView>
                                <SvgImg url={i_reply_plus} width={32} height={32}></SvgImg>
                                <MonoText>답장하기</MonoText>
                                <SvgImg url={i_pro} width={32} height={32}></SvgImg>
                            </BottemSheetElementView>
                            <BottemSheetElementView>
                                <SvgImg url={i_peek} width={32} height={32}></SvgImg>
                                <MonoText>엿보기</MonoText>
                            </BottemSheetElementView>
                            <BottemSheetElementView onPress={handleDelete}>
                                <SvgImg url={i_delete} width={32} height={32}></SvgImg>
                                <MonoText>편지 삭제하기</MonoText>
                            </BottemSheetElementView>
                        </BottemSheetBorderView>
                        <BottemSheetElementView onPress={handleBlock}>
                            <SvgImg url={i_incognito} ></SvgImg>
                            <MonoText>사용자 차단하기</MonoText>
                        </BottemSheetElementView>
                    </BottemSheetContentView>
                </BottemSheetView>
            </Modal>
            <DeleteModal isVisible={letterDelete} onClose={closeModal} letterId={letterId} />
            <BlockModal isVisible={letterBlock} onClose={closeModal} letterId={letterId} />

        </>
    );
};

export default BottomSheet;
