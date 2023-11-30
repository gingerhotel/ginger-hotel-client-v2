import { Tabs } from "expo-router/tabs";
import { TabBarIcon } from "../tab/TabBarIcon";
import { colors } from "../../constants/Colors";

export default function _layout() {
  return (
    <Tabs
      initialRouteName="hotel/[id]"
      screenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: colors.Whiteyello,
        tabBarStyle: {
          backgroundColor: colors.greyblack,
          borderTopWidth: 0,
          marginBottom: 0,
          flexDirection: "column",
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 10, // 텍스트 크기 조절
        },
      }}
    >
      <Tabs.Screen
        name="gingerAlbum"
        options={{
          headerShown: false,
          title: "앨범",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="album" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="hotel/[id]"
        options={{
          title: "내 호텔",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="hotel" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="my"
        options={{
          headerShown: false,
          title: "MY",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
