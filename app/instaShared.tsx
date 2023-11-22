import { View, StyleSheet, Text, Image, Platform } from "react-native";
import { useState, useEffect } from "react";
import { WithLocalSvg } from "react-native-svg";
import { colors } from "../constants/Colors";

const hotelFrame = require("../assets/images/frame_insta_shared.svg");
const hotelImage = require("../assets/images/StartHotel.svg");
const bottomLogo = require("../assets/images/logo_insta_shared.svg");

const InstaShared = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "가나다라마바사",
    userCode: "222222",
  });

  const [codeArray, setCodeArray] = useState<string[]>([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);

  useEffect(() => {
    setCodeArray(userInfo.userCode.split(""));
  }, [userInfo]);

  return (
    <View style={styles.container}>
      <View style={styles.content_wrapper}>
        <View style={styles.title_wrapper}>
          <Text style={styles.name_text}>
            <Text style={styles.from}>From</Text>
            {userInfo.userName}
          </Text>
          <Text style={styles.title_text}>내 진저호텔에 놀러오세요!</Text>
        </View>
        <View style={styles.hotel_wrapper}>
          <View style={styles.hotel_frame}>
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={hotelFrame} />
            ) : (
              <Image source={hotelFrame} />
            )}
          </View>
          <View style={styles.hotel_image}>
            {Platform.OS === "ios" || Platform.OS === "android" ? (
              <WithLocalSvg asset={hotelImage} width={300} height={380} />
            ) : (
              <Image source={hotelImage} style={{ width: 300, height: 380 }} />
            )}
          </View>
        </View>
        <View style={styles.code_info_wrapper}>
          <Text style={styles.code_text}>친구코드</Text>
          <View style={styles.code_wrapper}>
            {codeArray.map((item) => {
              return (
                <View style={styles.code_box}>
                  <Text style={styles.code}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.bottom_logo}>
        {Platform.OS === "ios" || Platform.OS === "android" ? (
          <WithLocalSvg asset={bottomLogo} />
        ) : (
          <Image source={bottomLogo} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green300,
  },
  content_wrapper: {
    backgroundColor: colors.grey900,
    borderRadius: 20,
    width: 350,
    height: 620,
    paddingVertical: 32,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  title_wrapper: {
    width: "100%",
    alignItems: "center",
  },
  name_text: {
    color: colors.green300,
    fontFamily: "SOYOMaple-Regular",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  from: {
    fontSize: 12,
  },
  title_text: {
    fontFamily: "NanumSquareNeo-Variable",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.Whiteyello,
  },

  hotel_wrapper: {
    marginVertical: 24,
    position: "relative",
    width: 300,
    height: 380,
  },
  hotel_frame: {
    position: "absolute",
    zIndex: 2,
  },

  hotel_image: {
    position: "absolute",
    zIndex: 1,
  },
  code_info_wrapper: {
    width: 262,
  },
  code_text: {
    fontFamily: "NanumSquareNeo-Variable",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.Whiteyello,
    marginBottom: 8,
  },
  code_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  code_box: {
    width: 34,
    height: 40,
    backgroundColor: colors.grey800,
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
  },
  code: {
    fontFamily: "NanumSquareNeo-Variable",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.green300,
    marginLeft: 10,
  },
  bottom_logo: {
    marginTop: 30,
  },
});

export default InstaShared;
