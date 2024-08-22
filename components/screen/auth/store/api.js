import HTTP from '../../../../Utils/HTTP.js'
import store from '../../../../store/store.js'

import {
    loginSuccess,
    loginFailure,
    userRegisterSuccess,
    userRegisterFailure
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

