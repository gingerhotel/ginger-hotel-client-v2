import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/tabs'

export default function _layout() {
  return (
    <Tabs
      initialRouteName='hotel/[id]'
      >
      <Tabs.Screen
        name="village"
        options={{
          headerShown: false,
          title: "빌리지",
        }}
      />
      <Tabs.Screen
        name="hotel/[id]"
        options={{
          title: "진저호텔",
        }}
        
      />
      <Tabs.Screen
        name="my"
        options={{
          headerShown: false,
          title: "마이페이지",
        }}
      />
    </Tabs>
  );
}