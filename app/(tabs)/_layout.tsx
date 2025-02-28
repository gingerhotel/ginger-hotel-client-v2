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
          marginBottom: 11,
        },
      }}
    >
      <Tabs.Screen
        name="village"
        options={{
          headerShown: false,
          title: "빌리지",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="album" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="hotel/[id]"
        options={{
          title: "최근 호텔",
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
