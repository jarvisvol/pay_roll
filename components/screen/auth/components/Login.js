import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import TextInput from '../../../common/TextInput';
import Background from '../../../common/Background';
import { Button } from 'react-native-paper';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { userLogin } from '../store/action';
import { router } from 'expo-router';
import * as secureStore from 'expo-secure-store'


function Login({ userLogin, statusOfActions, loginData, isLoading, }) {
  const data = useSelector((state) => state.authReducer);

  const [loginDetail, setLoginDetail] = useState({ email: { value: '', error: false }, password: { value: '', error: false } });

  useEffect(() => {
    switch (statusOfActions) {
      case 'USER_LOGIN_SUCCESS':
        console.log(loginData);
        async function settoken() {
          await secureStore.setItemAsync('accessToken', loginData.access_token)
        }
        settoken();
        router.push('/')
        break;
      default:
        break;
    }
  }, [statusOfActions])

  const submitHandler = () => {
    console.log(data);
    userLogin({ email: loginDetail.email.value, password: loginDetail.password.value })
  }

  return (
    <Background>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={loginDetail.email.value}
        onChangeText={(text) => setLoginDetail({ ...loginDetail, email: { value: text, error: '' } })}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={loginDetail.password.value}
        onChangeText={(text) => setLoginDetail({ ...loginDetail, password: { value: text, error: '' } })}
        secureTextEntry
      />
      <Button type='elevated' mode='contained' onPress={() => { submitHandler(); }}>Login</Button>
      <Text style={{ fontSize: 13, color: 'blue', marginTop: 10 }}>Or</Text>
      <Button type='elevated' onPress={() => { navigation.navigate('Register') }}> <Text style={{ textDecorationLine: 'underline' }}>Register</Text> </Button>
      <View
        style={{ alignItems: 'center', marginTop: 10 }}
      >
        <ActivityIndicator animating={isLoading} color={MD2Colors.blueGrey400} />
      </View>
    </Background>
  )
}



const mapStateToProps = (state) => {
  return {
    loginData: state.authReducer.loginData,
    statusOfActions: state.authReducer.statusOfActions,
    isLoading: state.authReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (payload) => {
      dispatch(userLogin(payload));
    }
  };
};

export default LoginComponent = connect(mapStateToProps, mapDispatchToProps)(Login);
