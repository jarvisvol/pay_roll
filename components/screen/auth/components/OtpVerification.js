import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../../../common/GlobalStyles";
import { connect } from 'react-redux';
import { userRegister } from '../store/action';
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { useRef } from "react";

const OtpVerification = ({isLoading, statusOfActions, registerEmail}) => {

  useEffect(() => {
    switch (statusOfActions) {
      case 'value':
        
        break;
      
      default:
        break;
    }
  }, []);

  const [formOtp, setFormOtp] = useState({
    box1: { value: '' },
    box2: { value: '' },
    box3: { value: '' },
    box4: { value: '' },
    box5: { value: '' },
  });

  const [selectedOtpBox, setSelectedOtpBox] = useState({
    box1: true
  })

  const inputref1 = useRef();
  const inputref2 = useRef();
  const inputref3 = useRef();
  const inputref4 = useRef();
  const inputref5 = useRef();

  const setOtpBoxValue = (boxNumber, value) => {
    switch (boxNumber) {
      case 'box1':
        setFormOtp({
          ...formOtp,
          box1: {value: value}
        });
        inputref2.current.focus();
        break;
      case 'box2':
        setFormOtp({
          ...formOtp,
          box2: {value: value}
        });
        inputref3.current.focus();
        break;
      case 'box3':
        setFormOtp({
          ...formOtp,
          box3: {value: value}
        });
        inputref4.current.focus();
        break;
      case 'box4':
        setFormOtp({
          ...formOtp,
          box4: {value: value}
        });
        inputref5.current.focus();
      break;
      case 'box5':
        setFormOtp({
          ...formOtp,
          box5: {value: value}
        });
      break;
      default:
        break;
    }
  }

  return (
    <View style={styles.verification}>
      <ActivityIndicator style={{zIndex: 4, position: 'relative', top: '60%', opacity: 1}} animating={isLoading} color={Color.colorSlateblue} size={'large'}/>
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
              `Enter the verification code we just sent to your Email ${registerEmail}.`
            }
          </Text>
        </View>
        <View style={styles.frame1}>
          <TextInput 
            ref={inputref1}
            keyboardType="numeric" 
            style={[styles.frame2, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box1.value}
            // onChangeText={(text) => setFormOtp({...formOtp, box1: { value: text }})}
            onKeyPress={event => {
              setOtpBoxValue('box1', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
            // onFocus={() => setSelectedOtpBox({box1: true})}
            />
          <TextInput 
            ref={inputref2}
            keyboardType="numeric" 
            style={[styles.frame3, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box2.value}
            // onChangeText={(text) => setFormOtp({...formOtp, box1: { value: text }})}
            onKeyPress={event => {
              setOtpBoxValue('box2', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
            // onFocus={() => setSelectedOtpBox({box1: true})}
          />
          <TextInput 
            ref={inputref3}
            keyboardType="numeric" 
            style={[styles.frame4, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box3.value}
            // onChangeText={(text) => setFormOtp({...formOtp, box1: { value: text }})}
            onKeyPress={event => {
              setOtpBoxValue('box3', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
            // onFocus={() => setSelectedOtpBox({box1: true})}
          />
          <TextInput 
            ref={inputref4}
            keyboardType="numeric" 
            style={[styles.frame5, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box4.value}
            // onChangeText={(text) => setFormOtp({...formOtp, box1: { value: text }})}
            onKeyPress={event => {
              setOtpBoxValue('box4', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
            // onFocus={() => setSelectedOtpBox({box1: true})}
          />
          <TextInput
            ref={inputref5} 
            keyboardType="numeric" 
            style={[styles.frame6, styles.frameBorder, styles.textalingmentbox]}
            value={formOtp.box5.value}
            // onChangeText={(text) => setFormOtp({...formOtp, box1: { value: text }})}
            onKeyPress={event => {
              setOtpBoxValue('box5', event.nativeEvent.key)
            }}
            blurOnSubmit={false}
            // onFocus={() => setSelectedOtpBox({box1: true})}
          />
        </View>
      </View>
      <View style={[styles.frame7, styles.framePosition]}>
        <View style={styles.verifyWrapper}>
          <Text style={[styles.verify, styles.textTypo]}>Verify</Text>
        </View>
        <Text
          style={[
            styles.didntReceiveCodeContainer,
            styles.enterTheVerificationTypo,
          ]}
        >
          <Text
            style={styles.didntReceiveCodeClr}
          >{`Didn’t receive code? `}</Text>
          <Text style={[styles.resend, styles.resendTypo]}>Resend</Text>
        </Text>
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

export default OtpVerificationComponent =  connect(mapStateToProps, mapDispatchToProps)(OtpVerification);