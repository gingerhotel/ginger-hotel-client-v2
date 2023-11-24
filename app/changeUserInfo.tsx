import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import Chip from "../components/chip";
import Input from "../components/input";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";
import { useState } from "react";
import Buttons from "../components/buttons";
import CenterModal from "../components/centerModal";

const ChangeUserInfo = () => {
  const sex_english: any = { 선택안함: "", 남성: "MAN", 여성: "WOMAN" };
  const sex_chip = ["선택안함", "여성", "남성"];
  const [activeChip, setChip] = useState("선택안함");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [userEmail, setUserEmail] = useState("happyginger@naver.com");
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const input_size = {
    web: 120,
    app: 100,
  };

  return (
    <>
      <View style={styles.container}>
        <CenterModal
          height={180}
          visible={modalVisible}
          onClose={closeModal}
          title="선택한 알림을 삭제할까요?"
          desc="한번 삭제한 알림은 복구할 수 없어요."
          btn_text="삭제하기"
        />
        <View style={styles.edit_wrapper}>
          <MonoText style={styles.title}>내 계정 정보</MonoText>
          <View style={styles.email_wrapper}>
            <MonoText style={styles.email_text}>{userEmail}</MonoText>
            <TouchableOpacity>
              <MonoText style={styles.logout_text}>로그아웃</MonoText>
            </TouchableOpacity>
          </View>
          <View style={styles.separator_horizontal}></View>
          <MonoText style={styles.input_title}>성별</MonoText>
          <View style={styles.chip_wrapper}>
            {sex_chip?.map((text, index) => (
              <TouchableOpacity key={index} onPress={() => setChip(text)}>
                <Chip text={text} active={activeChip} width={80} />
              </TouchableOpacity>
            ))}
          </View>

          <MonoText style={styles.input_title}>생년월일</MonoText>
          <MonoText style={styles.input_label}>
            생년월일을 형식에 맞게 입력해주세요.
          </MonoText>

          <View style={styles.input_wrapper}>
            <Input
              placeholder="YYYY"
              width={
                Platform.OS === "ios" || Platform.OS === "android"
                  ? input_size.app
                  : input_size.web
              }
              onChange={(text: string) => setYear(text)}
            />
            <View style={{ marginLeft: 8 }}></View>
            <Input
              placeholder="MM"
              width={
                Platform.OS === "ios" || Platform.OS === "android"
                  ? input_size.app
                  : input_size.web
              }
              onChange={(text: string) => setMonth(text)}
            />
            <View style={{ marginLeft: 8 }}></View>
            <Input
              placeholder="DD"
              width={
                Platform.OS === "ios" || Platform.OS === "android"
                  ? input_size.app
                  : input_size.web
              }
              onChange={(text: string) => setDay(text)}
            />
          </View>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="회원탈퇴 버튼"
          >
            <MonoText style={styles.input_title}>회원탈퇴</MonoText>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_wrapper}>
          <Buttons
            title="수정하기"
            color="green"
            callback={() => {
              openModal();
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyblack,
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  edit_wrapper: {
    marginTop: 40,
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    color: colors.Whiteyello,
  },
  email_wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  email_text: {
    color: colors.grey400,
  },
  logout_text: {
    color: colors.green500,
    fontWeight: "600",
  },
  separator_horizontal: {
    width: "100%",
    backgroundColor: colors.grey900,
    height: 1,
    marginTop: 10,
  },

  input_title: {
    marginTop: 40,
    marginBottom: 14,
    color: colors.Whiteyello,
    fontSize: 16,
  },
  input_label: {
    fontSize: 11,
    color: colors.grey600,
    marginBottom: 20,
  },
  btn_wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    width: "100%",
    marginBottom: 30,
  },
  chip_wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  input_wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ChangeUserInfo;
