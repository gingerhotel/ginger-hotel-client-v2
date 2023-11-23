import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Platform } from "react-native";
import * as Permissions from "expo-permissions";

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

    // 만약 다른 상태라면 (예: 'denied'), 해당 상태를 반환합니다.
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

  if (Device.isDevice) {
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
    console.log("token", token);
  } else {
    throw "error";
  }

  return token.data;
}
