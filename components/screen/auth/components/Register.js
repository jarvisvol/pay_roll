import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../../../../components/common/GlobalStyles";
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { userRegister } from '../store/action';

const RegisterScreen = ({isLoading, userRegister, statusOfActions}) => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState({});

  const [formObj, setFormObj] = useState({
        email: { value: '', error: false },
        password: { value: '', error: false },
        confirmPassword: { value: '', error: false },
        phoneNumber: { value: '', error: false }
    })

    const [fomValidation, setFomValidationFailed] = useState(false);

    useEffect(() => {
        switch (statusOfActions) {
            case 'USER_REGISTER_SUCCESS':
                router.push('/login');
                break;
            default:
                break;
        }

    }, [statusOfActions])

    const registerHandler = () => {
        const updatedFormObj = { ...formObj };
        let isValid = true;

        if (!isValidEmail(updatedFormObj.email.value)) {
            updatedFormObj.email.error = true;
            isValid = false;
        }

        if (updatedFormObj.password.value.length < 8) {
            updatedFormObj.password.error = true;
            isValid = false;
        }

        if (updatedFormObj.password.value !== updatedFormObj.confirmPassword.value) {
            updatedFormObj.confirmPassword.error = true;
            isValid = false;
        }

        if (updatedFormObj.phoneNumber.value.length !== 10) {
            updatedFormObj.phoneNumber.error = true;
            isValid = false;
        }

        setFormObj(updatedFormObj);

        if (isValid) {
            userRegister({
                email: formObj.email.value,
                password: formObj.password.value,
                phoneNumber: formObj.phoneNumber.value
            })
        } else {
            setFomValidationFailed(true);
        }
    }

    const isValidEmail = (email) => {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

  return (
    <View style={styles.registerScreen}>
      <View style={[styles.background, styles.headerPosition]} />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../../../../assets/images/objectsdouble.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={styles.createAccount}>Create Account</Text>
        <Text style={[styles.createAnAccount, styles.placeholderTypo]}>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>
      <View style={styles.frame}>
        <View style={styles.actions}>
          <View style={styles.buttonShadowBox}>
            <Text style={[styles.button1, styles.buttonTypo]}>Sign in</Text>
          </View>
          <View style={styles.button2}>
            <Text style={[styles.button3, styles.buttonTypo]}>
              Create new account
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.actions}>
          <View>
            <TextInput
                style={[isFocused.type === "email" && isFocused.focus && styles.input, styles.inputSpaceBlock]} 
                placeholder="Email" 
                onFocus={() => setIsFocused({type: "email", focus: true})}
                onBlur={() => setIsFocused({type: "email", focus: false})}
                // value={loginDetail.email.value}
                // onChangeText={(text) => {setLoginDetail({ ...loginDetail, email: { value: text, error: '' }}); setError({})}}
            />
            <TextInput
                style={[isFocused.type === "password" && isFocused.focus && styles.input, styles.input1, styles.inputSpaceBlock]} 
                placeholder="Password" 
                onFocus={() => setIsFocused({type: "password", focus: true})}
                onBlur={() => setIsFocused({type: "password", focus: false})}
                // value={loginDetail.email.value}
                // onChangeText={(text) => {setLoginDetail({ ...loginDetail, email: { value: text, error: '' }}); setError({})}}
            />
            <TextInput
                style={[isFocused.type === "confirmPassword" && isFocused.focus && styles.input, styles.input1, styles.inputSpaceBlock]} 
                placeholder="Confirm password" 
                onFocus={() => setIsFocused({type: "confirmPassword", focus: true})}
                onBlur={() => setIsFocused({type: "confirmPassword", focus: false})}
                // value={loginDetail.email.value}
                // onChangeText={(text) => {setLoginDetail({ ...loginDetail, email: { value: text, error: '' }}); setError({})}}
            />
          </View>
          <View style={styles.actions1}>
            <Button mode="contained" style={[styles.buttonShadowBox, styles.buttonTypo]} onPress={() => {registerHandler();}}>
              Sign Up
            </Button>
            <Pressable
              style={styles.button2}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={[styles.button3, styles.buttonTypo]}>
                Already have an account
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.socialMedia}>
        <Text style={[styles.orContinueWith, styles.buttonTypo]}>
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
              source={require("../../../../assets/images/frame-11.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  placeholderTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  buttonTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
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
    width: 428,
    height: 926,
  },
  frameIcon: {
    top: -356,
    left: -321,
    width: 1070,
    height: 1417,
    position: "absolute",
    overflow: "hidden",
  },
  createAccount: {
    left: 90,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.colorSlateblue,
    top: 0,
    position: "absolute",
  },
  createAnAccount: {
    top: 51,
    left: 39,
    color: Color.colorBlack,
    width: 326,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  header: {
    top: 85,
    height: 93,
  },
  button1: {
    fontSize: FontSize.size_xl,
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    width: 357,
    backgroundColor: Color.colorSlateblue,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "#cbd6ff",
    alignItems: "center",
    flexDirection: "row",
    textColor: Color.colorWhite,
  },
  button3: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_sm,
    position: 'relative',
    top: -12
  },
  button2: {
    marginTop: 30,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  actions: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame: {
    top: 701,
    left: -537,
    width: 1502,
    height: 131,
    position: "absolute",
    overflow: "hidden",
  },
  placeholder: {
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
  },
  input: {
    borderStyle: "solid",
    borderColor: Color.colorSlateblue,
    borderWidth: 2,
  },
  input1: {
    marginTop: 26,
  },
  actions1: {
    marginTop: 53,
  },
  frame1: {
    top: 243,
    left: 31,
    width: 366,
    height: 428,
    position: "absolute",
    overflow: "hidden",
  },
  orContinueWith: {
    fontSize: FontSize.size_sm,
    color: Color.colorSlateblue,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  registerScreen: {
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
    registerData: state.authReducer.registerData,
    statusOfActions: state.authReducer.statusOfActions,
    isLoading: state.authReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (payload) => {
      dispatch(userRegister(payload));
    }
  };
};

export default RegisterComponent =  connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
