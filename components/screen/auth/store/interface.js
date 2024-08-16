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
        error: error.result
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
        error: error.result
    }
}