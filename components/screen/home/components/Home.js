import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
export default function Home() {
  
  return (
    <View>
      <Text>Home</Text>
      <Link href={'login'}>Login</Link>
    </View>
  )
}