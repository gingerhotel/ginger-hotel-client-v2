import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/tabs'
import { TabBarIcon } from '../tab/TabBarIcon';
import { colors } from '../../constants/Colors';

export default function _layout() {
  return (
    <Tabs
      initialRouteName='hotel/[id]'
      screenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarStyle : {
          backgroundColor: colors.greyblack,
          borderTopWidth: 0,
          marginBottom: 0,
        }
      }}
      >
      <Tabs.Screen
        name="village"
        options={{
          headerShown: false,
          title: "앨범",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hotel/[id]"
        options={{
          title: "진저호텔",
          tabBarIcon: ({ color }) => <TabBarIcon name="hotel" color={color} />,
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          headerShown: false,
          title: "마이페이지",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}