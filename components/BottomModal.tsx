import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BottomSheet } from "react-native-btr";
import { MonoText } from "./StyledText";

const BottomModal = ({ height, visible, onClose }: any) => {
  const toggleBottomNavigationView = () => {
    onClose(); // 부모 컴포넌트에 닫기 이벤트를 전달
  };

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}
    >
      <View style={styles(height).bottomNavigationView}>
        <MonoText>답장하기</MonoText>
        <MonoText>엿보기</MonoText>
        <MonoText>사용자 차단</MonoText>
        <MonoText>편지 삭제</MonoText>
      </View>
    </BottomSheet>
  );
};

const styles = (height: number) =>
  StyleSheet.create({
    bottomNavigationView: {
      backgroundColor: "#fff",
      width: "100%",
      height,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 24,
      alignItems: "flex-start",
    },
  });

export default BottomModal;
