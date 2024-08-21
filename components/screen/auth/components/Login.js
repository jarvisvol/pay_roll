import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../../common/GlobalStyles";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";
import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import { userLogin } from '../store/action';
import { router } from 'expo-router';
import * as secureStore from 'expo-secure-store';

const Login = ({ userLogin, statusOfActions, loginData, isLoading }) => {

  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState({});
  
  const [loginDetail, setLoginDetail] = useState({ email: { value: '', error: false }, password: { value: '', error: false } });

  useEffect(() => {
    switch (statusOfActions) {
      case 'USER_LOGIN_SUCCESS':
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
    userLogin({ email: loginDetail.email.value, password: loginDetail.password.value })
  }

  return (
    <View style={styles.loginScreen}>
       <ActivityIndicator animating={isLoading} color={Color.colorGray} />
      <View style={styles.background} />
      <Image
        style={styles.objectsIcon}
        contentFit="cover"
        source={require("../../../../assets/images/objectsdouble.png")}
      />
      <View style={styles.form}>
        <View>
          <TextInput
            style={[isFocused.type === "email" && isFocused.focus && styles.input, styles.inputSpaceBlock]} 
            placeholder="Email" 
            onFocus={() => setIsFocused({type: "email", focus: true})}
            onBlur={() => setIsFocused({type: "email", focus: false})}
            value={loginDetail.email.value}
            onChangeText={(text) => setLoginDetail({ ...loginDetail, email: { value: text, error: '' } })}
          />
          <TextInput 
            style={[isFocused.type === "password" && isFocused.focus && styles.input, styles.input1, styles.inputSpaceBlock]} 
            placeholder="Password"
            onFocus={() => setIsFocused({type: "password", focus: true})}
            onBlur={() => setIsFocused({type: "password", focus: false})}
            secureTextEntry
            value={loginDetail.password.value}
            onChangeText={(text) => setLoginDetail({ ...loginDetail, password: { value: text, error: '' } })}
          />
        </View>
        <Pressable
          onPress={() => {console.log("jij");}}
        >
          <Text style={[styles.forgotYourPassword, styles.loginHereClr]}>Forgot your password?</Text>
        </Pressable>
        <View style={styles.actions}>
          <Button onPress={() => {submitHandler()}}  style={styles.button}>
            <Text style={[styles.button1, styles.button1Typo]}>Sign in</Text>
          </Button>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={[styles.button3, styles.button3Typo]}>
              Create new account
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.socialMedia}>
        <Text style={[styles.orContinueWith, styles.loginHereClr]}>
          Or continue with
        </Text>
        <View style={styles.socialMedia1}>
          <View style={styles.googleFlexBox}>
            <Image
              style={styles.googleChild}
              contentFit="cover"
              source={require("../../../../assets/images/frame-1.png")}
            />
          </View>
          <View style={[styles.facebook, styles.googleFlexBox]}>
            <Image
              style={styles.googleChild}
              contentFit="cover"
              source={require(".../../../../assets/images/frame-11.png")}
            />
          </View>
          <View style={[styles.facebook, styles.googleFlexBox]}>
            <Image
              style={styles.googleChild}
              contentFit="cover"
              source={require("../../../../assets/images/frame-12.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={[styles.loginHere, styles.loginHereClr]}>Login here</Text>
        <Text
          style={[styles.welcomeBackYouve, styles.button1Typo]}
        >
          {`Welcome back you’ve been missed!`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputSpaceBlock: {
    paddingBottom: Padding.p_xl,
    paddingRight: Padding.p_16xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_xl,
    width: 357,
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDimgray,
  },
  loginHereClr: {
    color: Color.colorSlateblue,
    textAlign: "center",
  },
  button1Typo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  button3Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  googleFlexBox: {
    width: 60,
    backgroundColor: Color.colorWhitesmoke,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  background: {
    top: 0,
    left: 0,
    width: 428,
    position: "absolute",
    height: 926,
  },
  objectsIcon: {
    top: -356,
    left: -364,
    width: 1113,
    height: 1431,
    position: "absolute",
  },
  placeholder: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDimgray,
    textAlign: "center",
  },
  input: {
    borderStyle: "solid",
    borderColor: Color.colorSlateblue,
    borderWidth: 2,
  },
  input1: {
    marginTop: 29,
  },
  forgotYourPassword: {
    marginTop: 30,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  button1: {
    color: Color.colorWhite,
    paddingTop: 10
  },
  button: {
    shadowColor: "#cbd6ff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: Color.colorSlateblue,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    borderRadius: Border.br_3xs,
  },
  button3: {
    color: Color.colorDarkslategray,
    textAlign: "center",
  },
  button2: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  actions: {
    marginTop: 30,
  },
  form: {
    top: 302,
    left: 31,
    alignItems: "flex-end",
    position: "absolute",
  },
  orContinueWith: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  googleChild: {
    width: 24,
    height: 24,
  },
  facebook: {
    marginLeft: 10,
  },
  socialMedia1: {
    justifyContent: "flex-end",
    marginTop: 20,
    flexDirection: "row",
  },
  socialMedia: {
    top: 736,
    left: 114,
    alignItems: "center",
    position: "absolute",
  },
  loginHere: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  welcomeBackYouve: {
    color: Color.colorBlack,
    marginTop: 26,
  },
  header: {
    top: 99,
    left: 64,
    width: 283,
    height: 131,
    paddingLeft: 30,
    paddingRight: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  loginScreen: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.colorWhite,
  },
});




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
