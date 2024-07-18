import React, { useEffect, useState } from 'react';
import TextInput from '../../../common/TextInput';
import Background from '../../../common/Background';
import { ActivityIndicator, MD2Colors, Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { userRegister } from '../store/action';
import { router } from 'expo-router';

function Register({isLoading, userRegister, navigation, statusOfActions}) {

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
        <Background>
            {
                fomValidation && <Text>Please Enter Valid Details</Text>
            }
            <TextInput
                label="Email"
                returnKeyType="next"
                value={formObj.email.value}
                onChangeText={(text) => setFormObj({ ...formObj, email: { value: text, error: '' } })}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Phone Number"
                returnKeyType="next"
                value={formObj.phoneNumber.value}
                onChangeText={(text) => setFormObj({ ...formObj, phoneNumber: { value: text, error: '' } })}
                autoCapitalize="none"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={formObj.password.value}
                onChangeText={(text) => setFormObj({ ...formObj, password: { value: text, error: '' } })}
                secureTextEntry
            />
            <TextInput
                label="Confirm Password"
                returnKeyType="done"
                value={formObj.confirmPassword.value}
                onChangeText={(text) => setFormObj({ ...formObj, confirmPassword: { value: text, error: '' } })}
                secureTextEntry
            />
            <Button type='elevated' mode='contained' onPress={() => { registerHandler(); }}> Register </Button>
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

export default RegisterComponent =  connect(mapStateToProps, mapDispatchToProps)(Register);
