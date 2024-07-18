import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

export default function RootLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='(cate)'  options={{
          title:'Cate',
          tabBarIcon: ({color, focused}) => (
            <View><Text>hih</Text></View>
          ),
          headerShown: false
        }}/>
        <Tabs.Screen name='(home)' options={{title:'home', headerShown: false}} />
        <Tabs.Screen name='(auth)' options={{title:'home', href:null}}/>
    </Tabs>
  )
}