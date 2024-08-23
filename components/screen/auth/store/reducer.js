import * as types from './action-types';

const initialState = {
    mydata: '',
    loginData: {},
    error: {},
    statusOfActions: '',
    isLoading: false,
    registerEmail: "",
    errorMessage: ""
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return {
                ...state,
                isLoading: true,
                statusOfActions: action.type
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loginData: action.result.data,
                statusOfActions: action.type,
                isLoading: false
            }
        case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: action.error.message,
                statusOfActions: action.type,
                isLoading: false
            }
        case types.USER_REGISTER:
            return {
                ...state,
                isLoading: true,
                statusOfActions: action.type,
                registerEmail: ""
            }
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                registerEmail: action.result.userDetails.email,
                statusOfActions: action.type,
                isLoading: false
            }
        case types.USER_REGISTER_FAILURE:
            return {
                ...state,
                errorMassege: action.error.message,
                statusOfActions: action.type,
            }
        case types.OTP_VERIFY:
            return {
                ...state,
                isLoading: true,
                statusOfActions: action.type
            }
        case types.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                statusOfActions: action.type,
                message: action.result.message
            }
        case types.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                statusOfActions: action.type,
                errorMessage: action.result.message
            }
        case types.RESEND_OTP:
            return {
                ...state,
                isLoading: true,
                statusOfActions: action.type
            }
        case types.RESEND_OTP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                statusOfActions: action.type,
                message: action.result.message
            }
        case types.RESEND_OTP_FAILURE:
            return {
                ...state,
                isLoading: false,
                statusOfActions: action.type,
                errorMessage: action.result.message
            }
        default:
            return {
                ...state
            };
    }
}

export default authReducer;
