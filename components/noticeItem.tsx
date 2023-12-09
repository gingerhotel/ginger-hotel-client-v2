import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "./themed";
import { useThemeColor } from "./themed";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MonoText } from "./styledText";
import { colors } from "../constants/Colors";
import { SvgImg } from "./svgImg";
import moment from "moment";

const message = require("../assets/icon/i_message.svg");

type TNoticeItem = {
  id: number;
  iconName: "envelope" | "user-check" | "user-times" | "search";
  content: string;
  time: string;
  isRead: boolean;
  actionButton?: boolean;
  deleteMode?: boolean;
  deleteChecked?: boolean;
  updatedDeleteChecked?: () => void;
  callback?: () => void;
};

const NoticeItem = ({
  iconName,
  content,
  time,
  isRead,
  actionButton = false,
  deleteMode = false,
  deleteChecked,
  callback,
}: TNoticeItem) => {
  const textColor = useThemeColor({}, "text");

  const rightChildRender = () => {
    if (deleteMode && deleteChecked) {
      return (
        <FontAwesome name="check-square-o" size={28} color={colors.green500} />
      );
    } else if (deleteMode && !deleteChecked) {
      return <FontAwesome name="square-o" size={28} color={textColor} />;
    } else if (actionButton) {
      return (
        <FontAwesome name="chevron-right" size={28} color={colors.Whiteyello} />
      );
    } else {
      return null;
    }
  };

  return (
    <TouchableOpacity onPress={callback}>
      <View
        style={[
          styles.item_wrapper,
          isRead ? styles.item_wrapper_is_read : null,
          deleteMode ? styles.item_wrapper_delete_mode : null,
          deleteChecked ? styles.item_wrapper_delete_mode_checked : null,
        ]}
      >
        <View style={styles.left}>
          <SvgImg url={message} width={35} height={35} />
        </View>
        <View style={styles.center}>
          <MonoText style={styles.item_title}>{content}</MonoText>
          <MonoText style={styles.item_time}>
            {moment(time).format("YYYY-MM-DD HH:mm:ss")}
          </MonoText>
        </View>
        {/* <View style={styles.right}>{rightChildRender()}</View> */}
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
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  item_wrapper_is_read: {
    borderColor: "gray",
    borderWidth: 2,
    opacity: 0.5,
  },
  item_wrapper_delete_mode: {
    borderWidth: 2,
    borderColor: "gray",
  },
  item_wrapper_delete_mode_checked: {
    borderColor: colors.green500,
  },
  left: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    flex: 1,
    marginLeft: 10,
  },
  center: {
    flexDirection: "column",
    marginLeft: 13,
    backgroundColor: "transparent",
    flex: 8,
  },
  item_title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
    color: colors.Whiteyello,
  },
  item_time: {
    fontSize: 10,
    color: colors.Whiteyello,
    marginTop: 3,
  },
  right: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    flex: 1,
  },
});

export default NoticeItem;
