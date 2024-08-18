import { Stack } from "expo-router";
import store from '../store/store'
import { Provider } from "react-redux";
import * as SecureStore from  'expo-secure-store';
import { useEffect, useState } from "react";

export default function RootLayout() {

  const [logedIn, setlogedIn] = useState();

  useEffect(() => {
    const checkToken = async() => {
      const token = await SecureStore.getItemAsync('accessToken');
      if(!token.length) {
        setlogedIn(false);
      } else {
        setlogedIn(true);
      }
      return token;
    }
    checkToken();
  }, []) 


  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false, href: null }} />
      </Stack>
    </Provider>
  );
}
