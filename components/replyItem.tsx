import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import BottomModal from "./bottomModal";
import { MonoText } from "./styledText";
import { colors } from "../constants/Colors";
import { typography } from "../constants/Typo";
const iconMore = require("../assets/icon/i_more_vert.png");
const iconPeek = require("../assets/icon/i_peek.svg");

type Props = {
  from: string;
  contents: string;
  is_active: boolean;
  navigation: any;
};

const ReplyItem = ({ from, contents, is_active, navigation }: Props) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const modalTextList = ["답장하기", "엿보기", "사용자 차단", "편지 삭제"];

  const toggleModal = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const closeModal = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View style={styles.wrapper}>
      <MonoText style={styles.from_text}>
        <View style={styles.from_wrapper}>
          <Image source={iconPeek} style={styles.peekIcon} />
          <View style={styles.flex_col}>
            <MonoText style={styles.subTitle}>보내는 이</MonoText>
            <MonoText style={styles.Title}>로온로운</MonoText>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={iconMore} style={styles.vertIcon} />
          </TouchableOpacity>
        </View>
        {"\n"}
        {"\n"}
        <MonoText style={styles.contents}>
          작년 겨울에 진저호텔 덕분에 따뜻한 겨울을 보낸 유저입니다! 이번
          sef2023에 진저호텔 팀이 연사로 참여한다고 해서 너무 궁금했어요.
          진저호텔 덕분에 저도 IT 서비스 개발에 관심이 생겨서 동아리도 가입하고
          개발을 열심히 배우고 있어요. 저에게 새로움 꿈을 만들어 준 진저호텔에게
          감사해요! :)
        </MonoText>
      </MonoText>
      <BottomModal
        height={150}
        visible={bottomSheetVisible}
        onClose={closeModal}
        modalTextList={modalTextList}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 18,
    borderWidth: 2,
    borderColor: colors.green700,
    borderRadius: 12,
    marginTop: 15,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.grey900,
  },
  flex_col: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  from_text: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "auto",
  },
  subTitle: {
    color: colors.green300,
    fontSize: 8,
    fontFamily: typography.basic.fontFamily,
    fontWeight: "800",
  },
  Title: {
    fontWeight: "700",
    color: colors.Whiteyello,
    fontSize: 16,
    fontFamily: typography.soyo.fontFamily,
  },
  contents: {
    fontSize: 11,
    lineHeight: 18,
    marginTop: 14,
    color: colors.Whiteyello,
  },
  from_wrapper: {
    width: 277,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  peekIcon: {
    width: 31,
    height: 31,
  },
  vertIcon: {
    width: 24,
    height: 24,
  },
});

export default ReplyItem;
