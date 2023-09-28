import React, { useCallback } from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import MailBox from "./mailbox";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("../assets/fonts/PretendardVariable.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  // const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen name="mailbox" options={{ headerShown: false }} />
      <Stack.Screen name="gingercard" options={{ headerShown: false }} />
    </Stack>
  );
}
