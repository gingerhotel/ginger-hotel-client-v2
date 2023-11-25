import { useEffect, useState } from "react";
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
import { useRecoilValue, useSetRecoilState } from "recoil";
import { hotelIdState } from "../../atom/letterAtom";
import { router } from "expo-router";

const keySvg = require("../../assets/icon/i_key.svg");
const glassesSvg = require("../../assets/icon/i_glasses_question_mark.svg");
const pencilSvg = require("../../assets/icon/i_pencil.svg");
const membershipSvg = require("../../assets/icon/i_membership.svg");
const questionCircleSvg = require("../../assets/icon/i_question_circle.svg");
const brushSvg = require("../../assets/icon/i_brush.svg");
const copySvg = require("../../assets/icon/i_copy.svg");

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
  const [userInfo, setUserInfo] = useState<User>({
    nickname: "",
    code: "",
    membership: "",
    gender: null,
    birthDate: null,
    keyCount: 0,
    feekCount: 0,
  });
  const setHotelId = useSetRecoilState(hotelIdState);
  useEffect(() => {
    const handleUserData = async () => {
      
      const accessToken = await AsyncStorage.getItem("accessToken");
      console.log(accessToken);
      axios
        .get<UserApiResponse>(`${BASE_URL}/members/my`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const { user } = response.data;
          const { hotel } = response.data;
          setHotelId(hotel.id);
          setUserInfo({
            nickname: user.nickname,
            code: user.code,
            membership: user.membership,
            gender: user.gender,
            birthDate: user.birthDate,
            keyCount: user.keyCount,
            feekCount: user.feekCount,
          });

          console.log(response.data);
          console.log("?");
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
            <Text style={[styles.name, { color: colors.Whiteyello }]}>
              {userInfo.nickname}
            </Text>
          </View>
          <View style={styles.user_info}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 45,
                width: 150,
              }}
            >
              <View
                style={{
                  height: 45,
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    color: colors.grey100,
                    fontWeight: "400",
                    fontFamily: "NanumSquareNeo-Variable",
                    marginBottom: 5,
                    height: 20,
                  }}
                >
                  내 멤버쉽
                </Text>
                <Text
                  style={{
                    color: colors.green600,
                    fontWeight: "700",
                    fontFamily: "NanumSquareNeo-Variable",
                    height: 20,
                  }}
                >
                  {userInfo.membership}
                </Text>
              </View>
              <View
                style={[
                  styles.separator_vertical,
                  { backgroundColor: colors.grey900 },
                ]}
              ></View>
              <TouchableOpacity
                onPress={() => {
                  router.push("/instaShared");
                }}
              >
                <View
                  style={{
                    height: 40,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      height: 20,
                      marginBottom: 5,
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
                      <Image source={copySvg} style={{ marginBottom: 5 }} />
                    )}
                  </View>
                  <Text
                    style={{
                      color: colors.green600,
                      fontWeight: "700",
                      fontFamily: "NanumSquareNeo-Variable",
                      height: 20,
                    }}
                  >
                    {userInfo.code}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.key_peek_container}>
          <TouchableOpacity
            style={[styles.key_peek_box, { backgroundColor: colors.grey900 }]}
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

          <TouchableOpacity
            style={[styles.key_peek_box, { backgroundColor: colors.grey900 }]}
            onPress={() => {}}
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
        </View>
        <View style={[styles.btn_group, { backgroundColor: colors.grey900 }]}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              width: 70,
              height: 55,
              justifyContent: "center",
            }}
          >
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={brushSvg} />
            ) : (
              <Image source={brushSvg} />
            )}
            <Text
              style={{
                color: colors.Whiteyello,
                fontWeight: "400",
                marginTop: 10,
                fontFamily: "NanumSquareNeo-Variable",
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
              width: 70,
              height: 55,
            }}
            onPress={() => {
              router.push("/changeUserInfo");
            }}
          >
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={pencilSvg} width={25} height={25} />
            ) : (
              <Image source={pencilSvg} style={{ width: 27, height: 27 }} />
            )}
            <Text
              style={{
                color: colors.Whiteyello,
                fontWeight: "400",
                marginTop:
                  Platform.OS === "ios" || Platform.OS === "android" ? 10 : 10,

                fontFamily: "NanumSquareNeo-Variable",
              }}
            >
              내정보수정
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
              width: 70,
              height: 55,
              justifyContent: "center",
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
        <View style={styles.ad_banner}>
          <Text>광고</Text>
        </View>
      </View>
      <View style={styles.linksContainer}>
        <View>
          <TouchableOpacity>
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              이용약관
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem('accessToken');
              router.push("/");
            }}
          >
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
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
          사업자등록번호 : 202-58-00723 대표이사 강민지
        </Text>
        <Text style={[styles.footer_text, { color: colors.grey500 }]}>
          주소 : 서울특별시 중구 서대문로7길 16 508-3호
        </Text>
        <Text style={[styles.footer_text, { color: colors.grey500 }]}>
          이메일 : teamgingerkr@gmail.com
        </Text>
      </View>
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
  },
  name_box: {
    width: "50%",
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
    height: 75,
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
