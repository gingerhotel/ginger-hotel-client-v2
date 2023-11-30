import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import Chip from "../components/chip";
import Input from "../components/input";
import { MonoText } from "../components/styledText";
import { colors } from "../constants/Colors";
import { useEffect, useState } from "react";
import Buttons from "../components/buttons";
import CenterModal from "../components/centerModal";
import { router, useNavigation } from "expo-router";
import Header from "../components/appHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangeUserInfo = () => {
  const sex_english: any = { 선택안함: "", 남성: "MAN", 여성: "WOMAN" };
  const sex_chip = ["선택안함", "여성", "남성"];
  const [activeChip, setChip] = useState("선택안함");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [userEmail, setUserEmail] = useState("happyginger@naver.com");

  const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);

  const openLogoutModal = () => {
    // refactor
    AsyncStorage.removeItem("accessToken");
    router.push("/");
    setLogoutModalVisible(true);
  };
  const closeLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const input_size = {
    web: 120,
    app: 100,
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Header title="내 정보 수정" />
          <CenterModal
            height={180}
            visible={logoutModalVisible}
            onClose={closeLogoutModal}
            title="로그아웃 하시겠어요?"
            desc="다음 로그인 때 동일한 계정으로 소셜로그인을 해야 호텔을 그대로 볼 수 있어요."
            btn_text="로그아웃"
          />

          <View style={styles.edit_wrapper}>
            <MonoText style={styles.title}>내 계정 정보</MonoText>
            <View style={styles.email_wrapper}>
              <MonoText style={styles.email_text}>{userEmail}</MonoText>
              <TouchableOpacity
                onPress={() => {
                  openLogoutModal();
                }}
              >
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
              onPress={() => {
                router.push("/deleteAccountOne");
              }}
            >
              <MonoText style={styles.input_title}>회원탈퇴</MonoText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btn_wrapper}>
          <Buttons
            title="수정하기"
            color="green"
            callback={() => {
              // TODO: 사용자 정보 (성별, 생년월일) 수정하는 API 호출 메서드로 변경
              router.back();
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
