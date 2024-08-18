import { Tabs } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='(home)' options={{title:'home', headerShown: false}} />
    </Tabs>
  )
}