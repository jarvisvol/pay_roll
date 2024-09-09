import { Stack } from 'expo-router'
import React from 'react'

export default function LeavesLayout() {
  return (
    <Stack>
        <Stack.Screen name='attendence' options={{headerShown: false}}/>
    </Stack>
  )
}