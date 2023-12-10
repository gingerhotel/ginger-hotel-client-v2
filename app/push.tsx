import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Buttons from "../components/buttons";
import { MonoText } from "../components/styledText";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "../components/themed";
import { useThemeColor } from "../components/themed";
import NoticeItem from "../components/noticeItem";
import { router, useNavigation, useSegments } from "expo-router";
import CenterModal from "../components/centerModal";

import * as Updates from "expo-updates";
import { colors } from "../constants/Colors";
import { typography } from "../constants/Typo";
import { SvgImg } from "../components/svgImg";
import { useQuery } from "react-query";
import { myNotifications } from "../api/pushApi";
import { useRecoilState } from "recoil";
import { windowDateState } from "../atom/letterAtom";
const arrow = require("../assets/icon/i_arrow_back.svg");

export default function Push() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const { data, status, error, refetch } = useQuery(
    "myNotifications",
    async () => await myNotifications(),
    {
      refetchOnWindowFocus: false,
      onError: (e) => {
        console.log(`useQuery error : ${e}`);
      },
    }
  );

  const segments = useSegments();
  useEffect(() => {
    const isPath = segments[1] === "push";
    if (isPath) {
      refetch();
    }
  }, [segments]);

  const [pushDeleteMode, setPushDeleteMode] = useState(false);
  const [deleteChecked, setDeleteChecked] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false },
    { id: 5, checked: false },
    { id: 6, checked: false },
  ]);

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      //alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  const updatedDeleteChecked = (id: number, checked: boolean) => {
    const updatedDeleteChecked = deleteChecked.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setDeleteChecked(updatedDeleteChecked);
  };

  const resetDeleteChecked = () => {
    const resetDeleteCheckedList = deleteChecked.map((item) => {
      return { id: item.id, checked: false };
    });
    setDeleteChecked(resetDeleteCheckedList);
  };

  const deleteModeChange = () => {
    setPushDeleteMode((prevDeleteMode) => !prevDeleteMode);
    resetDeleteChecked();
  };

  // CenterModal
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  // 뒤로가기
  const handleGoBack = () => {
    router.back();
  };
  const [letterCheck, setLetterCheck] = useRecoilState(windowDateState);

  const clickNotiItem = (item: any) => {
    switch (item.type) {
      case "LETTER":
        setLetterCheck(new Date(item?.typeData?.date).getDate());
        router.push(`/mailbox/${item?.typeData?.hotelId}`);
        break;
      case "WINDOW_OPEN":
        setLetterCheck(new Date(item?.typeData?.date).getDate());
        router.push(`/mailbox/${item?.typeData?.hotelId}`);
        break;
      case "REPLY":
        // setLetterCheck(new Date(item?.typeData?.date).getDate());
        // router.push(`/mailbox/${item?.typeData?.hotelId}`);
        break;
    }
  };

  {
    /* <CenterModal
        height={180}
        visible={modalVisible}
        onClose={closeModal}
        title="선택한 알림을 삭제할까요?"
        desc="한번 삭제한 알림은 복구할 수 없어요."
        btn_text="삭제하기"
      /> */
  }
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.greyblack }}>
        <View style={styles.container}>
          {pushDeleteMode ? null : (
            <SvgImg
              onPress={() => router.back()}
              //a_width={30}
              //a_height={30}
              url={arrow}
              width={30}
              height={30}
            />
          )}
          <MonoText style={[styles.title, typography.soyo]}>알림</MonoText>
          {/* {pushDeleteMode ? null : (
            <TouchableOpacity onPress={deleteModeChange}>
              <FontAwesome name="trash" size={28} color={colors.Whiteyello} />
            </TouchableOpacity>
          )} */}
          <View></View>
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        style={{ backgroundColor: colors.greyblack, padding: 20 }}
      >
        {data?.data.map((item: any) => (
          <NoticeItem
            id={deleteChecked[1].id}
            iconName={"envelope"}
            content={item.message}
            time={item.createdAt}
            isRead={false}
            actionButton={true}
            deleteMode={pushDeleteMode}
            deleteChecked={deleteChecked[1].checked}
            callback={() => clickNotiItem(item)}
          />
        ))}
      </ScrollView>
      {pushDeleteMode ? (
        <SafeAreaView style={styles.bottom}>
          <View style={styles.cancel_button_wrapper}>
            <Buttons
              title="취소"
              color="darkgray"
              is_width
              callback={deleteModeChange}
            />
          </View>
          <View style={styles.delete_button_wrapper}>
            <Buttons
              title="선택 항목 삭제하기"
              color="green"
              is_width
              callback={onFetchUpdateAsync}
            />
          </View>
        </SafeAreaView>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 11,
    paddingBottom: 11,
    backgroundColor: colors.greyblack,
    borderBottomColor: colors.greyblack,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 33,
    backgroundColor: colors.greyblack,
  },
  header_left_child: {
    height: 30,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  header_center_child: {
    height: 30,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  header_right_child: {
    height: 30,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: colors.Whiteyello,
    marginRight: 20,
  },
  bottom: {
    flexDirection: "row",
    gap: 10,
    height: 70,
  },
  cancel_button_wrapper: {
    flex: 1,
  },
  delete_button_wrapper: {
    flex: 3,
  },
});
