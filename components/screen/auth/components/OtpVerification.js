import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../../../common/GlobalStyles";
import { connect } from 'react-redux';
import { otpVerify, resendOtp } from '../store/action';
import { useState, useEffect } from "react";
import { ActivityIndicator, Button } from "react-native-paper";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import * as secureStore from 'expo-secure-store';

const OtpVerification = ({ isLoading, statusOfActions, registerEmail, otpVerify, resendOtp, otpLoginData }) => {

  const navigation = useNavigation();

  const [formOtp, setFormOtp] = useState({
    box1: { value: '' },
    box2: { value: '' },
    box3: { value: '' },
    box4: { value: '' },
    box5: { value: '' },
  });

  const inputref1 = useRef();
  const inputref2 = useRef();
  const inputref3 = useRef();
  const inputref4 = useRef();
  const inputref5 = useRef();

  useEffect(() => {
    switch (statusOfActions) {
      case 'OTP_VERIFY_SUCCESS':
        const settoken = async() => {
          const res = await secureStore.setItemAsync('accessToken', otpLoginData.accessToken)
          return res;
        }
        settoken();
        navigation.navigate("index");
        break;
      default:
        break;
    }
  }, [statusOfActions]);

  const setOtpBoxValue = (boxNumber, value) => {
    switch (boxNumber) {
      case 'box1':
        if (value !== 'Backspace') {
          setFormOtp({
            ...formOtp,
            box1: { value: value }
          });
          inputref2.current.focus();
        } else if (value === 'Backspace') {
          setFormOtp({
            ...formOtp,
            box1: { value: '' }
          });
        }
        break;
      case 'box2':
        if (value !== 'Backspace') {
          setFormOtp({
            ...formOtp,
            box2: { value: value }
          });
          inputref3.current.focus();
        } else if (value === 'Backspace') {
          setFormOtp({
            ...formOtp,
            box2: { value: '' }
          });
          inputref1.current.focus();
        }
        break;
      case 'box3':
        if (value !== 'Backspace') {
          setFormOtp({
            ...formOtp,
            box3: { value: value }
          });
          inputref4.current.focus();
        } else if (value === 'Backspace') {
          setFormOtp({
            ...formOtp,
            box3: { value: '' }
          });
          inputref2.current.focus();
        }
        break;
      case 'box4':
        if (value !== 'Backspace') {
          setFormOtp({
            ...formOtp,
            box4: { value: value }
          });
          inputref5.current.focus();
        } else if (value === 'Backspace') {
          setFormOtp({
            ...formOtp,
            box4: { value: '' }
          });
          inputref3.current.focus();
        }
        break;
      case 'box5':
        if (value !== 'Backspace') {
          setFormOtp({
            ...formOtp,
            box5: { value: value }
          });
          inputref5.current.blur()
        } else if (value === 'Backspace') {
          setFormOtp({
            ...formOtp,
            box5: { value: '' }
          });
          inputref4.current.focus();
        }
        break;
      default:
        break;
    }
  }

  const otpSubmitHandler = () => {
    const joinedOtp = Object.values(formOtp).map((box) => box.value).join('');
    otpVerify({ otp: joinedOtp, email: registerEmail });
  }

  const resendOtpHandler = () => {
    resendOtp({email: registerEmail});
  }

  return (
    <View style={styles.verification}>
      <ActivityIndicator style={{ zIndex: 4, position: 'relative', top: '60%', opacity: 1 }} animating={isLoading} color={Color.colorSlateblue} size={'large'} />
      <View style={[styles.frame, styles.framePosition]}>
        <View
          style={[
            styles.otpVerificationParent,
            styles.otpVerificationParentPosition,
          ]}
        >
          <Text style={[styles.otpVerification, styles.resendTypo]}>
            OTP Verification
          </Text>
          <Text
            style={[styles.enterTheVerification, styles.didntReceiveCodeClr]}
          >
            {
              `Enter the verification code we just sent to your mail ${registerEmail}.`
            }
          </Text>
        </View>
        <View style={styles.frame1}>
          <TextInput
            ref={inputref1}
            keyboardType="numeric"
            style={[styles.frame2, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box1.value}
            onKeyPress={event => {
              setOtpBoxValue('box1', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
          />
          <TextInput
            ref={inputref2}
            keyboardType="numeric"
            style={[styles.frame3, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box2.value}
            onKeyPress={event => {
              setOtpBoxValue('box2', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
          />
          <TextInput
            ref={inputref3}
            keyboardType="numeric"
            style={[styles.frame4, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box3.value}
            onKeyPress={event => {
              setOtpBoxValue('box3', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
          />
          <TextInput
            ref={inputref4}
            keyboardType="numeric"
            style={[styles.frame5, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box4.value}
            onKeyPress={event => {
              setOtpBoxValue('box4', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
          />
          <TextInput
            ref={inputref5}
            keyboardType="numeric"
            style={[styles.frame6, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box5.value}
            onKeyPress={event => {
              setOtpBoxValue('box5', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
          />
        </View>
      </View>
      <View style={[styles.frame7, styles.framePosition]}>
        <Button
          mode='contained'
          style={[styles.verifyWrapper, styles.verify, styles.textTypo]}
          onPress={() => { otpSubmitHandler(); }}
        >
          Verify
        </Button>
          <Text style={[styles.didntReceiveCodeClr, styles.enterTheVerificationTypo]}>
            {`Didn’t receive code? `}
          </Text>
        <Button onPress={() => {resendOtpHandler()}} style={[styles.resend, styles.resendTypo]}>Resend</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 40,
    width: 335,
    position: "absolute",
    overflow: "hidden",
  },
  otpVerificationParentPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  resendTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  didntReceiveCodeClr: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  frameBorder: {
    borderColor: Color.colorSlateblue,
    width: 46,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 50,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  enterTheVerificationTypo: {
    fontSize: FontSize.size_sm,
    width: 335,
  },
  otpVerification: {
    fontSize: FontSize.size_11xl,
    color: "#1e232c",
    textAlign: "left",
    width: 335,
  },
  enterTheVerification: {
    marginTop: 10,
    fontSize: FontSize.size_sm,
    width: 335,
    textAlign: "left",
  },
  otpVerificationParent: {
    left: 0,
  },
  frameChild: {
    left: 289,
    backgroundColor: "rgba(217, 217, 217, 0.2)",
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: 46,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 50,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 10,
    left: 16,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  textalingmentbox: {
    textAlign: 'center'
  },
  frame2: {
    left: 0,
  },
  frame3: {
    left: 58,
  },
  frame4: {
    left: 116,
  },
  frame5: {
    left: 173,
  },
  frame6: {
    left: 231,
  },
  frame1: {
    top: 127,
    height: 50,
    left: 0,
    width: 335,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 105,
    height: 177,
    width: 335,
  },
  verify: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  verifyWrapper: {
    top: 322,
    borderRadius: 100,
    backgroundColor: Color.colorSlateblue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 14,
    left: 0,
    width: 335,
    position: "absolute",
  },
  resend: {
    color: Color.colorSlateblue,
    position: 'relative',
    top: -32,
    left: 5

  },
  didntReceiveCodeContainer: {
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame7: {
    top: 312,
    height: 500,
    width: 335,
  },
  verification: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});



const mapStateToProps = (state) => {
  return {
    registerEmail: state.authReducer.registerEmail,
    statusOfActions: state.authReducer.statusOfActions,
    isLoading: state.authReducer.isLoading,
    otpLoginData: state.authReducer.otpLoginData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    otpVerify: (payload) => {
      dispatch(otpVerify(payload));
    },
    resendOtp: (payload) => {
      dispatch(resendOtp(payload));
    }
  };
};

export default OtpVerificationComponent = connect(mapStateToProps, mapDispatchToProps)(OtpVerification);