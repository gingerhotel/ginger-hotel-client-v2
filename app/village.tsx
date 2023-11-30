import * as React from "react";
import { View, useWindowDimensions, StyleSheet, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Header from "../components/appHeader";
import { MonoText } from "../components/styledText";
import VillageHeader from "../components/villageHeader";
import LoginModal from "../components/Modal/loginModal";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { useQuery } from "react-query";
import { deleteVillage, myVillage } from "../api/villageApi";
import CustomSmallHotel from "../components/customSmallHotel";
import { colors } from "../constants/Colors";
import { typography } from "../constants/Typo";
import { SvgImg } from "../components/svgImg";
import BottomModal from "../components/bottomModal";
import Toast from "react-native-toast-message";
const more = require("../assets/icon/i_more_vert_grey.svg");
const bellboy = require("../assets/gingerman/Modal_Ginger/g_bellboy.png");

const AllVillage = () => (
  <View
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // justifyContent: "center",
      padding: 50,
      backgroundColor: colors.greyblack,
      height: "100%",
    }}
  >
    <Image style={{ width: 200, height: 300 }} source={bellboy} />
    <MonoText style={styles.text}>준비중입니다!</MonoText>
  </View>
);

const MyVillage = ({ data, open }: { data: any; open: any }) => (
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
    <MonoText style={styles.info}>
      상대방은 내 빌리지를 볼 수 없어요 {"\n"}
      상대방은 내 빌리지에 추가된 사실을 알 수 없어요
    </MonoText>

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
          <CustomSmallHotel
            wallColor={village.bodyColor}
            structColor={village.structColor}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MonoText
              style={{
                color: colors.Whiteyello,
                textAlign: "center",
                marginLeft: 8,
              }}
            >
              {village.nickname}의 진저호텔
            </MonoText>
            <SvgImg
              url={more}
              style={{ width: 24, height: 24 }}
              onPress={() => open(village.hotelId)}
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
  </View>
);
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

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selected, setSelected] = useState("");
  const closeModal = () => {
    setBottomSheetVisible(false);
  };

  const renderScene = SceneMap({
    all: AllVillage,
    my: () => {
      return <MyVillage data={data || {}} open={open} />;
    },
  });

  const open = (id: string) => {
    setBottomSheetVisible(true);
    setSelected(id);
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "my", title: "내 진저 빌리지" },
    { key: "all", title: "진저호텔 둘러보기" },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.green300 }}
      style={[styles.title]}
      renderLabel={({ route }) => (
        <MonoText
          style={[
            {
              color: colors.Whiteyello,
            },
            typography.soyo,
          ]}
        >
          {route.title}
        </MonoText>
      )}
    />
  );

  const handelDeleteVillage = async () => {
    const res = await deleteVillage(String(selected));
    setBottomSheetVisible(false);

    if (res?.success) {
      Toast.show({
        type: "iconToast",
        text1: "내 빌리지에서 삭제되었습니다.",
        position: "top",
      });
      refetch();
    }
  };

  return (
    <>
      <Header title="빌리지" disabledIcon={true} />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <BottomModal
        id={selected}
        visible={bottomSheetVisible}
        onClose={closeModal}
        callback={handelDeleteVillage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 20,
    backgroundColor: colors.Whiteyello,
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
