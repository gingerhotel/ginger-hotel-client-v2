import React, { useState } from "react";
import { View, StyleSheet, Modal, Pressable, Text } from "react-native";
import { BottomSheet } from "react-native-btr";
import { MonoText } from "./styledText";

type Props = {
  onClose?: any;
  visible?: boolean;
  height?: number | any;
  title: string;
  desc: string;
  btn_text: string;
};

const CenterModal = ({
  height,
  visible,
  onClose,
  title,
  desc,
  btn_text,
}: Props) => {
  const setModalVisible = () => {
    onClose(); // 부모 컴포넌트에 닫기 이벤트를 전달
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible();
      }}
    >
      <View style={styles(height).centeredView}>
        <View style={styles(height).modalView}>
          <MonoText style={styles(height).modal_title}>{title}</MonoText>
          <MonoText style={styles(height).modal_desc}>{desc}</MonoText>

          <View style={styles(height).button_wrapper}>
            <Pressable
              style={[styles(height).button, styles(height).buttonClose]}
              onPress={() => setModalVisible()}
            >
              <MonoText style={styles(height).textStyle}>취소</MonoText>
            </Pressable>
            <Pressable
              style={[styles(height).button, styles(height).buttonOpen]}
              onPress={() => setModalVisible()}
            >
              <MonoText style={styles(height).textStyle}>{btn_text}</MonoText>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = (height: number) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "black",
      borderRadius: 10,
      width: "80%",
      height,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#000",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    button: {
      borderRadius: 10,
      padding: 8,
      paddingLeft: 10,
      paddingRight: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      marginRight: 10,
      backgroundColor: "#5A66FF",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modal_title: {
      marginBottom: 15,
      fontSize: 20,
      textAlign: "center",
    },
    modal_desc: {
      fontSize: 13,
      marginBottom: 20,
    },
    button_wrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
    },
  });

export default CenterModal;
