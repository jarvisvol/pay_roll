import HTTP from '../../../../Utils/HTTP.js'
import store from '../../../../store/store.js'

import {
    loginSuccess,
    loginFailure,
    userRegisterSuccess,
    userRegisterFailure,
    otpVerifySuccess,
    otpVerifyFailure,
    resendOtpSuccess,
    resendOtpFailure
} from './interface.js'

export const userLogin = async(payload) => {
        try {
            const result = await HTTP.post('/user/login', payload);
            store.dispatch(loginSuccess(result.data));
        } catch (error) {
            store.dispatch(loginFailure(error.response.data));
        }
}

export const userRegister = async(payload) => {
    try {
        const result = await HTTP.post('/user/register', payload);
        store.dispatch(userRegisterSuccess(result.data));
    } catch (error) {
        store.dispatch(userRegisterFailure(error.response.data));
    }
}

export const otpVerify = async(payload) => {
    try {
        const result = await HTTP.post('/user/check-otp', payload);
        store.dispatch(otpVerifySuccess(result.data)); 
    } catch (error) {
        store.dispatch(otpVerifyFailure(error.response.data));
    }
}

export const resendOtp = async(payload) => {
    try {
        const result = await HTTP.post('/user/resend-otp', payload);
        store.dispatch(resendOtpSuccess(result.data));
    } catch (error) {
        store.dispatch(resendOtpFailure(error.response.data));   
    }
}

