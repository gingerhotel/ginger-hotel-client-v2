import React, { useState } from "react";
import { View, StyleSheet, Modal, Pressable, Text } from "react-native";
import { colors } from "../constants/Colors";
import Input from "./input";
import { MonoText } from "./styledText";
import { SvgImg } from "./svgImg";

type Props = {
  onClose?: any;
  visible?: boolean;
  height?: number | any;
  title: string;
  desc: string;
  btn_text: string;
  img?: string;
  sub?: string;
  callback?: (item: any) => void;
};

const CenterInputModal = ({
  height,
  visible,
  onClose,
  title,
  desc,
  btn_text,
  img,
  sub,
  callback,
}: Props) => {
  const setModalVisible = () => {
    onClose(); // 부모 컴포넌트에 닫기 이벤트를 전달
  };

  const [code, setCode] = useState<string>("");
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
          {img && <SvgImg url={img} width={120} height={120} />}

          <MonoText style={styles(height).modal_title}>{title}</MonoText>
          <View
            style={{
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Input
              onChange={(text: string) => setCode(text)}
              placeholder="친구코드를 입력해주세요!"
              maxLength={7}
            />

            <MonoText style={styles(height).modal_desc}>{desc}</MonoText>
          </View>
          <View style={styles(height).button_wrapper}>
            <Pressable
              style={[styles(height).button, styles(height).buttonClose]}
              onPress={() => setModalVisible()}
            >
              <MonoText style={styles(height).textStyle}>취소</MonoText>
            </Pressable>
            <Pressable
              style={[styles(height).button, styles(height).buttonOpen]}
              onPress={() => callback && callback(code)}
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
      backgroundColor: "#0e0e0eb1",
    },
    modalView: {
      backgroundColor: colors.grey900,
      borderRadius: 10,
      width: 360,
      padding: 28,
      height,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.grey900,
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
      padding: 13,
      paddingLeft: 10,
      paddingRight: 10,
      elevation: 2,
      width: "50%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonOpen: {
      backgroundColor: colors.green600,
      color: colors.Whiteyello,
    },
    buttonClose: {
      marginRight: 10,
      backgroundColor: colors.grey700,
      color: colors.grey400,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      flex: 1,
    },
    modal_title: {
      marginBottom: 11,
      fontSize: 16,
      textAlign: "center",
      color: colors.Whiteyello,
    },
    modal_desc: {
      fontSize: 12,
      marginTop: 5,
      marginBottom: 10,
      color: colors.orange300,
      textAlign: "center",
      lineHeight: 21,
    },
    modal_sub: {
      fontSize: 14,
      marginBottom: 20,
      color: colors.Whiteyello,
    },
    button_wrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
    },
  });

export default CenterInputModal;
