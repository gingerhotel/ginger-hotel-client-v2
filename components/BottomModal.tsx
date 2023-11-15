import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomSheet } from "react-native-btr";
import { Image } from "react-native-svg";
import { colors } from "../constants/Colors";
import CenterModal from "./centerModal";
import { MonoText } from "./styledText";
import { SvgImg } from "./svgImg";
const icon = require("../assets/icon/i_history_edu.svg");

const BottomModal = ({
  height,
  visible,
  onClose,
  modalTextList,
  navigation,
}: any) => {
  const toggleBottomNavigationView = () => {
    onClose(); // 부모 컴포넌트에 닫기 이벤트를 전달
  };
  const [centerModalVisible, setCenterModalVisible] = useState(false);

  const closeCenterModal = () => {
    setCenterModalVisible(false);
  };

  const onClickModal = (text: string) => {
    switch (text) {
      case "답장하기":
        navigation.navigate("answer");
        onClose();
        break;
      case "엿보기":
        setCenterModalVisible(true);
        break;
      default:
        return;
    }
  };

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}
    >
      <View style={styles(height).bottomNavigationView}>
        {modalTextList.map((text: string) => (
          <TouchableOpacity key={text} onPress={() => onClickModal(text)}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <SvgImg url={icon} />
              <MonoText
                style={{
                  color: colors.Whiteyello,
                  fontSize: 16,
                  marginLeft: 5,
                }}
              >
                {text}
              </MonoText>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <CenterModal
        height={180}
        visible={centerModalVisible}
        onClose={closeCenterModal}
        title="엿보기가 부족해요!"
        desc="엿보기 충전이 필요해요"
        btn_text="충전하러 가기"
      />
    </BottomSheet>
  );
};

const styles = (height: number) =>
  StyleSheet.create({
    bottomNavigationView: {
      backgroundColor: colors.grey800,
      width: "100%",
      height,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 40,
      paddingBottom: 15,
      paddingLeft: 23,
      alignItems: "flex-start",
    },
  });

export default BottomModal;
