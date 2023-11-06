import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "./themed";
import { useThemeColor } from "./themed";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MonoText } from "./styledText";

type TNoticeItem = {
  iconName: "envelope" | "user-check" | "user-times" | "search";
  content: string;
  time: string;
  isRead: boolean;
};

const NoticeItem = ({ iconName, content, time, isRead }: TNoticeItem) => {
  const textColor = useThemeColor({}, "text");

  return (
    <TouchableOpacity>
      <View
        style={[
          styles.item_wrapper,
          isRead ? styles.item_wrapper_is_read : null,
        ]}
      >
        <View style={styles.left}>
          {iconName === "user-check" || iconName === "user-times" ? (
            <FontAwesome5 name={iconName} size={28} color={textColor} />
          ) : (
            <FontAwesome name={iconName} size={28} color={textColor} />
          )}
        </View>
        <View style={styles.right}>
          <MonoText style={styles.item_title}>{content}</MonoText>
          <MonoText style={styles.item_time}>{time}</MonoText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item_wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 8,
    alignItems: "center",
    backgroundColor: "#36363B",
    borderRadius: 5,
    paddingVertical: 10,
  },
  item_wrapper_is_read: {
    borderColor: "gray",
    borderWidth: 1,
    opacity: 0.5,
  },
  left: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  right: {
    flexDirection: "column",
    marginLeft: 13,
    backgroundColor: "transparent",
  },
  item_title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
  },
  item_time: {
    fontSize: 8,
    color: "#D9D9D9",
  },
});

export default NoticeItem;
