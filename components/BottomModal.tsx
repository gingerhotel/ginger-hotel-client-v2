import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomSheet } from "react-native-btr";
import CenterModal from "./CenterModal";
import { MonoText } from "./StyledText";

const BottomModal = ({ height, visible, onClose, modalTextList }: any) => {
  const toggleBottomNavigationView = () => {
    onClose(); // 부모 컴포넌트에 닫기 이벤트를 전달
  };
  const [centerModalVisible, setCenterModalVisible] = useState(false);

  const closeCenterModal = () => {
    setCenterModalVisible(false);
  };

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}
    >
      <View style={styles(height).bottomNavigationView}>
        {modalTextList.map((text: string) => (
          <TouchableOpacity
            key={text}
            onPress={() => setCenterModalVisible(true)}
          >
            <MonoText>{text}</MonoText>
          </TouchableOpacity>
        ))}
      </View>

      <CenterModal
        height={180}
        visible={centerModalVisible}
        onClose={closeCenterModal}
      />
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
