import { Stack } from 'expo-router'
import React from 'react'

export default function LeavesLayout() {
  return (
    <Stack>
        <Stack.Screen name='leaves' options={{headerShown: false}}/>
    </Stack>
  )
}