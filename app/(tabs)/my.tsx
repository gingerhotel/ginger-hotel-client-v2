import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../constants/Colors";
import { WithLocalSvg } from "react-native-svg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetRecoilState } from "recoil";
import { hotelIdState } from "../../atom/letterAtom";
import { router } from "expo-router";
import LoginModal from "../../components/Modal/\bloginModal";
import KakaoAdFit_relative from "../../advertisement/KakaoAdFit_relative";
import KeyModal from "../../components/Modal/keyModal";
import PeekModal from "../../components/Modal/peekModal";
import { SvgImg } from "../../components/svgImg";

const keySvg = require("../../assets/icon/i_key.svg");
const glassesSvg = require("../../assets/icon/i_glasses_question_mark.svg");
const pencilSvg = require("../../assets/icon/i_pencil.svg");
const questionCircleSvg = require("../../assets/icon/i_question_circle.svg");
const copySvg = require("../../assets/icon/i_copy.svg");
const hotelModifySvg = require("../../assets/icon/i_hotel_modify.svg");
const mycardSvg = require("../../assets/icon/i_mycard.svg");
const feek_blur = require("../../assets/images/feekBlurMy.svg");
const feek_blur_text = require("../../assets/images/feekBlurMyText.svg");

interface User {
  nickname: string;
  code: string;
  membership: string;
  gender: "MAN" | "WOMAN" | null;
  birthDate: string | null;
  keyCount: number;
  feekCount: number;
}

interface Hotel {
  id: number;
  nickname: string;
  description: string;
  structColor: string;
  bodyColot: string; // 오타 수정: bodyColor로 변경
}

interface UserApiResponse {
  success: boolean;
  user: User;
  hotel: Hotel;
}
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
export default function TabThreeScreen() {
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);

  const [keyModalVisible, setKeyModalVisible] = useState<boolean>(false);
  const [peekModalVisible, setPeekModalVisible] = useState<boolean>(false);

  const openKeyModal = () => {
    setKeyModalVisible(true);
  };
  const closeKeyModal = () => {
    setKeyModalVisible(false);
  };
  const openPeekModal = () => {
    setPeekModalVisible(true);
  };
  const closePeekModal = () => {
    setPeekModalVisible(false);
  };
  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  useEffect(() => {
    // setLoginModalVisible(true);
  }, []);

  const [userInfo, setUserInfo] = useState<User>({
    nickname: "",
    code: "",
    membership: "",
    gender: null,
    birthDate: null,
    keyCount: 0,
    feekCount: 0,
  });

  const [hotel, setHotelinfo] = useState<any>(0);
  const setHotelId = useSetRecoilState(hotelIdState);
  useEffect(() => {
    const handleUserData = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      axios
        .get<UserApiResponse>(`${BASE_URL}/members/my`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const { user, hotel } = response.data;
          setUserInfo({
            nickname: user.nickname,
            code: user.code,
            membership: user.membership,
            gender: user.gender,
            birthDate: user.birthDate,
            keyCount: user.keyCount,
            feekCount: user.feekCount,
          });

          setHotelinfo(hotel.id);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    handleUserData();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.greyblack }]}>
      <View style={styles.header}>
        <Text style={styles.header_text}>마이페이지</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.user_info_box}>
          <View style={styles.name_box}>
            <View style={styles.name_bow_wrapper}>
              <Text style={[styles.name, { color: colors.Whiteyello }]}>
                {userInfo.nickname}
              </Text>
              {Platform.OS === "ios" || Platform.OS === "android" ? (
                <TouchableOpacity
                  onPress={() => {
                    router.push("/changeUserInfo");
                  }}
                >
                  <WithLocalSvg asset={pencilSvg} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    router.push("/changeUserInfo");
                  }}
                >
                  <Image source={pencilSvg} style={{ marginTop: 5 }} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.user_info}>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginBottom: 3,
                  }}
                >
                  <Text
                    style={{
                      color: colors.grey100,
                      fontWeight: "400",
                      fontFamily: "NanumSquareNeo-Variable",
                      height: 20,
                    }}
                  >
                    내 코드{" "}
                  </Text>
                  {Platform.OS === "ios" || Platform.OS === "android" ? (
                    <WithLocalSvg
                      asset={copySvg}
                      width={15}
                      height={15}
                      style={{ marginBottom: 5 }}
                    />
                  ) : (
                    <Image
                      source={copySvg}
                      style={{ marginBottom: 5, marginLeft: 5 }}
                    />
                  )}
                </View>
                <Text
                  style={{
                    color: colors.green600,
                    fontWeight: "700",
                    fontFamily: "NanumSquareNeo-Variable",
                  }}
                >
                  {userInfo.code}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.key_peek_container}>
          <TouchableOpacity
            style={[styles.key_peek_box, { backgroundColor: colors.grey900 }]}
            onPress={openKeyModal}
          >
            <View>
              <Text
                style={{
                  color: colors.Whiteyello,
                  fontWeight: "700",
                  marginBottom: 5,
                  fontFamily: "NanumSquareNeo-Variable",
                }}
              >
                내 열쇠 <FontAwesome name={"chevron-right"} />
              </Text>
              <Text
                style={{
                  color: colors.Whiteyello,
                  fontWeight: "400",
                  fontFamily: "NanumSquareNeo-Variable",
                }}
              >
                {userInfo.keyCount}개
              </Text>
            </View>
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={keySvg} width={70} height={70} />
            ) : (
              <Image source={keySvg} style={{ height: 70, width: 70 }} />
            )}
          </TouchableOpacity>

          {/* 엿보기 블러 버전 시작 */}
          <View style={[styles.key_peek_box, { backgroundColor: colors.grey900 }]}>
            <View>
              <Text
                style={{
                  color: colors.Whiteyello,
                  fontWeight: "700",
                  marginBottom: 5,
                  fontFamily: "NanumSquareNeo-Variable",
                }}
              >
                내 엿보기 <FontAwesome name={"chevron-right"} />
              </Text>
              <Text
                style={{
                  color: colors.Whiteyello,
                  fontWeight: "400",
                  fontFamily: "NanumSquareNeo-Variable",
                }}
              >
                0개
              </Text>
            </View>
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={glassesSvg} width={50} height={50} />
            ) : (
              <Image source={glassesSvg} style={styles.icon_style} />
            )}
            <SvgImg style={styles.key_peek_box_blur} url={feek_blur} />
            <SvgImg style={styles.key_peek_box_blur_text} url={feek_blur_text} />
          </View>
          {/* 엿보기 블러 버전 끝 */}

          {/* 마이페이지 엿보기 버튼 주석 처리 : 엿보기 기능 구현 전
          <TouchableOpacity
            style={[styles.key_peek_box, { backgroundColor: colors.grey900 }]}
            onPress={openPeekModal}
          >
            <View>
              <Text
                style={{
                  color: colors.Whiteyello,
                  fontWeight: "700",
                  marginBottom: 5,
                  fontFamily: "NanumSquareNeo-Variable",
                }}
              >
                내 엿보기 <FontAwesome name={"chevron-right"} />
              </Text>
              <Text
                style={{
                  color: colors.Whiteyello,
                  fontWeight: "400",
                  fontFamily: "NanumSquareNeo-Variable",
                }}
              >
                {userInfo.feekCount}개
              </Text>
            </View>
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={glassesSvg} width={50} height={50} />
            ) : (
              <Image source={glassesSvg} style={styles.icon_style} />
            )}
          </TouchableOpacity> 
          */}
        </View>
        <View style={[styles.btn_group, { backgroundColor: colors.grey900 }]}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 60,
            }}
            onPress={() => {
              router.push(`/updateHotel/${hotel}`);
            }}
          >
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={hotelModifySvg} />
            ) : (
              <Image source={hotelModifySvg} />
            )}
            <Text
              style={{
                color: colors.Whiteyello,
                fontWeight: "400",
                fontFamily: "NanumSquareNeo-Variable",
                marginTop: 10,
              }}
            >
              호텔수정
            </Text>
          </TouchableOpacity>
          <View
            style={[
              styles.separtator_vertical_for_btn,
              { backgroundColor: colors.grey800 },
            ]}
          ></View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 60,
            }}
            onPress={() => {
              router.push("/instaShared");
            }}
          >
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={mycardSvg} />
            ) : (
              <Image source={mycardSvg} />
            )}
            <Text
              style={{
                color: colors.Whiteyello,
                fontWeight: "400",
                marginTop: 10,
                fontFamily: "NanumSquareNeo-Variable",
              }}
            >
              내 카드
            </Text>
          </TouchableOpacity>
          <View
            style={[
              styles.separtator_vertical_for_btn,
              { backgroundColor: colors.grey800 },
            ]}
          ></View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 60,
            }}
          >
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={questionCircleSvg} />
            ) : (
              <Image source={questionCircleSvg} />
            )}
            <Text
              style={{
                color: colors.Whiteyello,
                fontWeight: "400",
                marginTop: 10,
                fontFamily: "NanumSquareNeo-Variable",
              }}
            >
              FAQ
            </Text>
          </TouchableOpacity>
        </View>
        {/* <KakaoAdFit_relative/> */}
      </View>
      <View style={styles.linksContainer}>
        <View>
          <TouchableOpacity onPress={() => { window.open('https://probable-failing-2db.notion.site/4bcd9a04d98443489412e52fa6bf5b68?pvs=4') }}>
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              이용약관
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { window.open('https://probable-failing-2db.notion.site/72817f9a68c24c87ba4a42a16499d933?pvs=4') }}>
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              개인정보 처리방침
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              router.push("/csCenter");
            }}
          >
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              고객센터
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { window.open('https://www.instagram.com/gingerhotel_official') }}>
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              <FontAwesome name="instagram" size={16} /> 진저호텔
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={[
            styles.separator_horizontal,
            { backgroundColor: colors.grey900 },
          ]}
        ></View>
        <Text style={[styles.footer_text, { color: colors.grey500 }]}>
          사업자등록번호 : 202-58-00723 대표 강민지
        </Text>
        <Text style={[styles.footer_text, { color: colors.grey500 }]}>
          주소 : 서울특별시 중구 남대문로7길 16 508-3호
        </Text>
        <Text style={[styles.footer_text, { color: colors.grey500 }]}>
          이메일 : teamgingerkr@gmail.com
        </Text>
      </View>
      <LoginModal
        height={300}
        visible={loginModalVisible}
        onClose={closeLoginModal}
        name="로그인"
        desc=""
      />
      <KeyModal
        visible={keyModalVisible}
        onClose={closeKeyModal}
        code={userInfo?.code}
      />
      <PeekModal visible={peekModalVisible} onClose={closePeekModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    marginTop: 33,
  },
  header_text: {
    fontFamily: "SOYOMaple-Regular",
    fontSize: 18,
    color: colors.Whiteyello,
    width: 86,
  },

  profileContainer: {
    backgroundColor: "transparent",
    flex: 5,
    justifyContent: "space-around",
  },

  user_info_box: {
    flexDirection: "row",
    alignItems: "center",
  },
  user_info: {
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingTop: 5,
  },
  name_box: {
    width: "50%",
  },
  name_bow_wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    marginRight: 10,
    fontFamily: "SOYOMaple-Regular",
  },
  separator_vertical: {
    height: "100%",
    width: 2,
    marginHorizontal: 10,
  },
  separtator_vertical_for_btn: {
    height: "100%",
    width: 2,
  },

  key_peek_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 75,
  },
  key_peek_box: {
    width: "48%",
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  // 엿보기 버튼 블러 시작
  key_peek_box_blur: {
    width: "100%",
    position: "absolute"
  },
  key_peek_box_blur_text: {
    position: "absolute",
    alignItems: "center"
  },
  // 엿보기 버튼 블러 끝
  icon_style: {
    width: 50,
    height: 50,
  },

  btn_group: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },

  ad_banner: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    borderRadius: 12,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  linksContainer: {
    backgroundColor: "transparent",
    flex: 4,
    justifyContent: "space-around",
  },
  links_text: {
    fontSize: 16,
    fontFamily: "NanumSquareNeo-Variable",
  },

  footer: {
    flex: 1,
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  separator_horizontal: {
    height: 2,
    width: "100%",
    marginVertical: 5,
  },
  footer_text: {
    marginBottom: 5,
    fontFamily: "NanumSquareNeo-Variable",
  },
});
