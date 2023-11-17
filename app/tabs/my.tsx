import { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../constants/Colors";
import { WithLocalSvg } from "react-native-svg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const keySvg = require("../../assets/icon/i_key.svg");
const glassesSvg = require("../../assets/icon/i_glasses.svg");

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

export default function TabThreeScreen({ navigation }: any) {
  const [userInfo, setUserInfo] = useState<User>({
    nickname: "",
    code: "",
    membership: "",
    gender: null,
    birthDate: null,
    keyCount: 0,
    feekCount: 0,
  });

  useEffect(() => {
    const handleUserData = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      console.log(accessToken);
      axios
        .get<UserApiResponse>("http://127.0.0.1:8082/members/my", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const { user } = response.data;
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
      <View style={styles.profileContainer}>
        <View style={styles.user_info_box}>
          <View style={styles.name_box}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={[styles.name, { color: colors.Whiteyello }]}>
                {userInfo.nickname}
              </Text>
              <FontAwesome
                name={"chevron-right"}
                size={20}
                color={colors.Whiteyello}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.user_info}>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    color: colors.grey100,
                    fontWeight: "400",
                    fontFamily: "NanumSquareNeo-Variable",
                  }}
                >
                  내 멤버쉽
                </Text>
                <Text
                  style={{
                    color: colors.green600,
                    fontWeight: "700",
                    fontFamily: "NanumSquareNeo-Variable",
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
              <TouchableOpacity>
                <View>
                  <Text
                    style={{
                      color: colors.grey100,
                      fontWeight: "400",
                      fontFamily: "NanumSquareNeo-Variable",
                    }}
                  >
                    내 코드 <FontAwesome5 name="copy" />
                  </Text>
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
              <WithLocalSvg asset={keySvg} />
            ) : (
              <Image source={keySvg} style={styles.icon_style} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.key_peek_box, { backgroundColor: colors.grey900 }]}
            onPress={() => navigation.navigate("feekCharge")}
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
              <WithLocalSvg asset={glassesSvg} />
            ) : (
              <Image source={glassesSvg} style={styles.icon_style} />
            )}
          </TouchableOpacity>
        </View>
        <View style={[styles.btn_group, { backgroundColor: colors.grey900 }]}>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome
              name="paint-brush"
              color={colors.Whiteyello}
              size={20}
            />
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
          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome name="star" color={colors.Whiteyello} size={20} />
            <Text
              style={{
                color: colors.Whiteyello,
                fontWeight: "400",
                marginTop: 10,
                fontFamily: "NanumSquareNeo-Variable",
              }}
            >
              멤버쉽
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome
              name="question-circle-o"
              color={colors.Whiteyello}
              size={20}
            />
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
          <TouchableOpacity>
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              고객센터
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={[styles.links_text, { color: colors.grey300 }]}>
              팀진저
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
  profileContainer: {
    backgroundColor: "transparent",
    flex: 5.5,
    justifyContent: "space-around",
  },

  user_info_box: {
    flexDirection: "row",
    alignItems: "center",
  },
  user_info: {
    flexDirection: "row-reverse",
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
    height: 35,
    width: 2,
    marginHorizontal: 10,
  },

  key_peek_container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    width: 70,
  },

  btn_group: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
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
    flex: 3.5,
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
