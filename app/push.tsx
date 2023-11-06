import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MonoText } from "../components/styledText";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "../components/themed";
import { useThemeColor } from "../components/themed";
import NoticeItem from "../components/noticeItem";

export default function Push() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.header, { backgroundColor }]}>
        <View style={styles.header_left_child}>
          <MonoText style={styles.title}>알림</MonoText>
        </View>
        <View style={styles.header_right_child}>
          <TouchableOpacity>
            <FontAwesome
              name="trash"
              size={28}
              style={{ marginRight: 23 }}
              color={textColor}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="close" size={28} color={textColor} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
        <NoticeItem
          iconName={"envelope"}
          content={"두근두근! 새 편지 도착!"}
          time={"오후 5시 20분 "}
          isRead={false}
        />
        <NoticeItem
          iconName={"search"}
          content={"헤르미온느님께서 엿보기를 요청했어요!"}
          time={"오후 5시 20분 "}
          isRead={false}
        />
        <NoticeItem
          iconName={"user-check"}
          content={"000님께서 엿보기를 수락했어요!"}
          time={"오후 5시 20분 "}
          isRead={false}
        />
        <NoticeItem
          iconName={"user-times"}
          content={"000님께서 엿보기를 거절했어요!"}
          time={"오후 5시 20분 "}
          isRead={false}
        />
        <NoticeItem
          iconName={"user-times"}
          content={"000님께서 엿보기를 거절했어요!"}
          time={"오후 5시 20분 "}
          isRead={true}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 33,
    paddingLeft: 23,
    paddingRight: 23,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  header_left_child: {},
  header_right_child: {
    flexDirection: "row",
  },
  title: {
    fontSize: 23,
    fontWeight: "600",
    marginBottom: 33,
  },
});
