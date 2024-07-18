import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function detail() {
  return (
    <View>
      <Text>detail</Text>
      <Link href={'/category'} >jii</Link>
    </View>
  )
}