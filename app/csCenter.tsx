import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/Colors";

const CsCenter = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: colors.Whiteyello,
        }}
      >
        문의
      </Text>
      <View style={styles.email_box}>
        <Text style={{ color: colors.Whiteyello }}>E-mail</Text>
        <Text style={{ color: colors.Whiteyello, fontWeight: "600" }}>
          teamgingerkr@gmail.com
        </Text>
      </View>
      <Text style={{ color: colors.grey400 }}>
        ⋅ 문의사항 및 다양한 의견을 위의 이메일 주소로 보내주세요!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 23,
    backgroundColor: colors.greyblack,
  },
  email_box: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.grey900,
    borderColor: colors.grey600,
    borderWidth: 1,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});

export default CsCenter;
