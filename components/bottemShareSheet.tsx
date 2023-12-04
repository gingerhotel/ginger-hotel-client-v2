// BottomSheet.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SvgImg } from './svgImg';
import { BottemSheetBorderView, BottemSheetContentView, BottemSheetDraeView, BottemSheetElementView, BottemSheetView } from '../style/bottemSheetStyled';
import { MonoText } from './styledText';
import DeleteModal from './Modal/deleteModal';
import { BottomSheetDeleteProps, BottomSheetProps } from '../api/interface';
import { colors } from "../constants/Colors";
import { useRecoilValue } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';

import * as Clipboard from 'expo-clipboard';
import Toast from "react-native-toast-message";

const icon: any = require("../assets/icon/i_check_green.svg");
const i_drag = require("../assets/icon/i_drag_handle.svg");
const i_incognito = require("../assets/icon/i_incognito.svg");
const i_peek = require("../assets/icon/i_peek.svg");
const i_reply_plus = require("../assets/icon/i_reply_plus.svg");
const i_delete = require("../assets/icon/i_delete.svg");
const i_pro = require("../assets/icon/i_pro.svg");
const BottemShareSheet = ({
  isVisible,
  onClose,
  letterId,
  blocked,
  replyId
}: BottomSheetDeleteProps) => {
  const handleSwipeMove = (gestureState: any) => {
    // console.log(gestureState.dy);
  };
  const handleLinkCopy = () => {
  // Clipboard.setStringAsync(`https://www.ginger-hotel.site/hotel/${id}`); get id 
  Toast.show({
    type: "iconToast",
    text1: "링크가 복사되었습니다!",
    position: "bottom",
    props: { icon },
  });
    onClose();
  };

  const close = () => {
    onClose();
  };
  const handleReply = () => {
    onClose();
  };
  const onBackButtonPress = () => {
    onClose();
  };
  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={onBackButtonPress}
        onBackdropPress={onBackButtonPress}
        onSwipeComplete={onClose}
        swipeDirection={["down", "up"]}
        onSwipeMove={handleSwipeMove}
        // onSwipeStart={() => console.log("Swipe started")}
        style={{ margin: 0, backgroundColor: "transparent" }}
        backdropOpacity={0.2}
      >
        <BottemSheetView>
          <BottemSheetContentView>
            <BottemSheetDraeView>
              <SvgImg url={i_drag} width={32} height={4} onPress={onClose} />
            </BottemSheetDraeView>
            <BottemSheetBorderView>
            <BottemSheetElementView onPress={handleReply}>
              <MonoText style={{ color: colors.Whiteyello, fontSize: 15 }}>
              인스타 공유 <FontAwesome name="instagram" size={16} />
              </MonoText>
            </BottemSheetElementView>
            <BottemSheetElementView onPress={handleLinkCopy}>
              <MonoText style={{ color: colors.Whiteyello, fontSize: 15 }}>
              링크 복사
              </MonoText>
            </BottemSheetElementView>
            </BottemSheetBorderView>
            <BottemSheetElementView onPress={close}>
              <MonoText style={{ color: colors.Whiteyello, fontSize: 15 }}>
              취소
              </MonoText>
            </BottemSheetElementView>
          </BottemSheetContentView>
        </BottemSheetView>
      </Modal>
    </>
  );
};

export default BottemShareSheet;
