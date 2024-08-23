import * as types from './action-types';
import * as API from './api'

export const userLogin = (payload) => {
    API.userLogin(payload);
    return {
        type: types.USER_LOGIN
    }
}

export const userRegister = (payload) => {
    API.userRegister(payload);
    return {
        type: types.USER_REGISTER
    }
}

export const otpVerify = (payload) => {
    API.otpVerify(payload);
    return {
        type: types.OTP_VERIFY
    }
}

export const resendOtp = (payload) => {
    API.resendOtp(payload);
    return {
        type: types.RESEND_OTP
    }
}