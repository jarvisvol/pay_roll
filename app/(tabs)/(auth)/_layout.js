import { Stack } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name='login' options={{headerShown: false}}/>
        <Stack.Screen name='register' options={{headerShown: false}}/>
        <Stack.Screen name='setpassCode' options={{headerShown: false}}/>
    </Stack>
  )
}