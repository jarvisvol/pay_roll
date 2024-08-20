import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='(home)' options={{title:'home', headerShown: false}} />
        <Tabs.Screen name='(auth)' options={{title:'auth', href: null, headerShown: false}} />
    </Tabs>
  )
}