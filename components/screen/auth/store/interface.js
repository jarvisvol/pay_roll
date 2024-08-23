import * as types from './action-types';


export const loginSuccess = (result) =>{
    return {
        type: types.USER_LOGIN_SUCCESS,
        result: result
    }
}

export const loginFailure = (error) =>{
    return {
        type: types.USER_LOGIN_FAILURE,
        error: error
    }
}

export const userRegisterSuccess = (result) =>{
    return {
        type: types.USER_REGISTER_SUCCESS,
        result: result
    }
}

export const userRegisterFailure = (error) =>{
    return {
        type: types.USER_REGISTER_FAILURE,
        error: error
    }
}

export const otpVerifySuccess = (result) =>{
    return {
        type: types.OTP_VERIFY_SUCCESS,
        result: result
    }
}

export const otpVerifyFailure = (error) =>{
    return {
        type: types.OTP_VERIFY_FAILURE,
        error: error
    }
}

export const resendOtpSuccess = (data) => {
    return {
        type: types.RESEND_OTP_SUCCESS,
        result: data
    }
}

export const resendOtpFailure = (error) => {
    return {
        type: types.RESEND_OTP_FAILURE,
        error: error
    }
}