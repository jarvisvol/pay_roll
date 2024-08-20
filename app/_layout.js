import { Stack } from "expo-router";
import store from '../store/store'
import { Provider } from "react-redux";
import FontStyle from "../components/common/FontStyle";

export default function RootLayout() {


  return (
    <Provider store={store}>
      <FontStyle>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </FontStyle>
    </Provider>
  );
}
