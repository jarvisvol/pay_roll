import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
  return (
    <Stack>
        <Stack.Screen name='login' options={{headerShown: false}}/>
        <Stack.Screen name='register' options={{headerShown: false}}/>
        <Stack.Screen name='welcome' options={{headerShown: false}}/>
        <Stack.Screen name='otpVerification' options={{headerShown: false}}/>
    </Stack>
  )
}