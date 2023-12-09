import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Platform } from "react-native";
import * as Permissions from "expo-permissions";
import { deviceNotifications } from "../api/pushApi";

export async function registerForPushNotificationsAsync() {
  let token: any;

  const getNotificationPermissionStatus = async () => {
    // 권한 요청
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );

    // 만약 권한이 'granted'면 이미 권한이 허용되어 있는 상태입니다.
    if (existingStatus === "granted") {
      return "granted";
    }

    // 만약 'undetermined'이면 사용자에게 권한을 요청합니다.
    if (existingStatus === "undetermined") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      return status;
    }
    return existingStatus;
  };

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  if (true) {
    const existingStatus = await getNotificationPermissionStatus();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      //   alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: (Constants as any).expoConfig.extra.eas.projectId,
    });
    console.log("token 11", token?.data, finalStatus);
    if (token?.data) {
      const res = await deviceNotifications({
        token: token.data,
        status: finalStatus,
      });
      alert(JSON.stringify(res));
    }
  }

  return token.data;
}
