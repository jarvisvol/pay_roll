import { router, Stack, Tabs } from 'expo-router'
import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native';

export default function HomeLayout() {
  const [logedIn, setlogedIn] = useState();

  useEffect(() => {
    const checkToken = async() => {
      let token = '';
      if(Platform.OS === 'web'){
        token = localStorage.getItem('accessToken');
      } else {
        token = await SecureStore.getItemAsync('accessToken');
      }
      if(token?.length) {
        router.push('/welcome');
      } else {
        setlogedIn(true);
      }
      return token;
      }
    checkToken();
  }, []) 
  
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />
    </Stack>
  )
}