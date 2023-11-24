import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/tabs'

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="village"
        options={{
          headerShown: false,
          tabBarLabel: "빌리지",
        }}
      />
      <Tabs.Screen
        name="hotel"
        options={{
          headerShown: false,
          tabBarLabel: "진저호텔",
          href: null,
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          headerShown: false,
          tabBarLabel: "마이페이지",
        }}
      />
    </Tabs>
  );
}