import { View, Text, Button } from 'react-native'
import React, { useEffect, useCallback, useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import * as Font from 'expo-font';

export default function _layout() {
    const router = useRouter();
  return (
   <Stack
    screenOptions={{
        // headerStyle: {
        //     backgroundColor: 'black'
        // },
        // headerTintColor: 'white'
    }}
   >
        <Stack.Screen name="index" options={{
            title: 'Home',
            headerShown: false,
        }} />
        <Stack.Screen name="(tabs)" options={{
            headerShown: false
        }} />
        <Stack.Screen name="[missing]" options={{
            title: '404'
        }} />
   </Stack>
  )

  
}