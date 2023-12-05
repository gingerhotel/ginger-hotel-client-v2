// BottomSheet.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SvgImg } from './svgImg';
import { BottemSheetBorderView, BottemSheetContentView, BottemSheetDraeView, BottemSheetElementView, BottemSheetView } from '../style/bottemSheetStyled';
import { MonoText } from './styledText';
import DeleteModal from './Modal/deleteModal';
import { BottomShareProps } from '../api/interface';
import { colors } from "../constants/Colors";
import { useRecoilValue } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';

import Share, {Social} from 'react-native-share';

import * as Clipboard from 'expo-clipboard';
import Toast from "react-native-toast-message";
import { push } from 'expo-router/src/global-state/routing';
import { router } from 'expo-router';

const icon: any = require("../assets/icon/i_check_green.svg");
const i_drag = require("../assets/icon/i_drag_handle.svg");

const BottemShareSheet = ({
  isVisible,
  onClose,
  hotelId,
}: BottomShareProps) => {
  const handleSwipeMove = (gestureState: any) => {
    // console.log(gestureState.dy);
  };
  const handleLinkCopy = () => {
  Clipboard.setStringAsync(`https://release.d144dxif1q3m24.amplifyapp.com/hotel/${hotelId}`); 
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
  const goMyHotelCard = () => {
    router.push(`/instaShared/${hotelId}`);
  // const handleInstaStory = () => {
  //   Share.shareSingle({
  //     social: Social.InstagramStories,
  //     appId: "440384258310203",
  //     // backgroundImage: "배경으로 지정할 이미지의 URL",
  //     // backgroundVideo: "배경으로 지정할 동영상의 URL",
  //     // stickerImage: "sticker 형식으로(작게) 공유할 이미지의 URL", 
  //     backgroundBottomColor: " #837DF4",
  //     backgroundTopColor: "#906df4",
  //   });
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
            <BottemSheetElementView onPress={goMyHotelCard}>
            {/* <BottemSheetElementView onPress={handleInstaStory}> */}
              <MonoText style={{ color: colors.Whiteyello, fontSize: 15 }}>
              내 호텔 카드 {/*  <FontAwesome name="instagram" size={16} /> */}
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
