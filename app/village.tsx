import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  Touchable,
  Text,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Header from "../components/appHeader";
import { MonoText } from "../components/styledText";
import VillageHeader from "../components/villageHeader";
import LoginModal from "../components/Modal/loginModal";
import { useEffect, useState } from "react";
import { Link, router, useNavigation } from "expo-router";
import { useQuery } from "react-query";
import { deleteVillage, myVillage } from "../api/villageApi";
import CustomSmallHotel from "../components/customSmallHotel";
import { colors } from "../constants/Colors";
import { typography } from "../constants/Typo";
import { SvgImg } from "../components/svgImg";
import BottomModal from "../components/bottomModal";
import Toast from "react-native-toast-message";
import CenterModal from "../components/centerModal";
const more = require("../assets/icon/i_delete_2.svg");
const bellboy = require("../assets/gingerman/Modal_Ginger/g_bellboy.png");
const building = require("../assets/images/building.svg");

export default function Village() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const { data, status, error, refetch } = useQuery(
    "myVillage",
    async () => await myVillage(),
    {
      refetchOnWindowFocus: false,
      onError: (e) => {
        console.log(`useQuery error : ${e}`);
      },
    }
  );
  const [deleteModal, setDeleteModal] = useState(false);
  const [selected, setSelected] = useState("");
  const handelModal = (id: string) => {
    setDeleteModal(true);
    setSelected(id);
  };

  const handelDeleteVillage = async () => {
    try {
      const res = await deleteVillage(String(selected));
      if (res?.success) {
        Toast.show({
          type: "iconToast",
          text1: "내 빌리지에서 삭제되었습니다.",
          position: "top",
        });
        setDeleteModal(false);
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header title="진저빌리지" disabledIcon={true} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          padding: 20,
          backgroundColor: colors.greyblack,
          height: "100%",
        }}
      >
        <View
          style={{
            borderRadius: 12,
            backgroundColor: colors.green50,
            padding: 16,
            paddingLeft: 12,
            paddingRight: 12,
            width: "100%",
            position: "relative",
          }}
        >
          <Text
            style={[
              typography.soyo,
              {
                fontSize: 16,
                color: colors.greyblack,
                fontWeight: "bold",
              },
            ]}
          >
            빌리지에 넣고 빠르게 방문하세요
          </Text>
          <MonoText
            style={{ fontSize: 12, color: colors.grey500, marginTop: 7 }}
          >
            내 빌리지는 나만 볼 수 있어요!
          </MonoText>

          <SvgImg
            url={building}
            style={{
              width: 100,
              height: 62,
              position: "absolute",
              right: 10,
              bottom: 0,
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          {data?.villages?.map((village: any) => (
            <View key={village.id}>
              <TouchableOpacity
                onPress={() => router.push(`/hotel/${village.hotelId}`)}
              >
                <CustomSmallHotel
                  wallColor={village.bodyColor}
                  structColor={village.structColor}
                />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: colors.grey900,
                  borderWidth: 1,
                  borderColor: colors.grey700,
                  padding: 10,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopWidth: 0,
                }}
              >
                <Text
                  style={[
                    typography.soyo,
                    {
                      color: colors.green500,
                      textAlign: "center",
                      marginLeft: 8,
                      fontWeight: "bold",
                      maxWidth: 120,
                    },
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {village?.nickname}
                </Text>
                <SvgImg
                  url={more}
                  style={{ width: 24, height: 24 }}
                  onPress={() => handelModal(village?.hotelId)}
                />
              </View>
            </View>
          ))}
          {!data ||
            (data?.villages?.length < 1 && (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  // padding: 50,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image style={{ width: 200, height: 300 }} source={bellboy} />

                <MonoText style={styles.text}>
                  내 빌리지에 친구를 추가해보세요!
                </MonoText>
              </View>
            ))}
        </View>

        <CenterModal
          onClose={() => setDeleteModal(false)}
          height={180}
          visible={deleteModal}
          title="내 빌리지에서 삭제할까요?"
          desc="상대방은 삭제된 사실을 알 수 없어요!"
          btn_text="삭제하기"
          callback={handelDeleteVillage}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 20,
    backgroundColor: colors.green50,
    textAlign: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
    lineHeight: 23,
  },
  title: {
    fontSize: 18,
    backgroundColor: colors.greyblack,
    padding: 4,
  },

  text: {
    color: colors.Whiteyello,
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
