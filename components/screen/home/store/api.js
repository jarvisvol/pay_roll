import HTTP from '../../../../Utils/HTTP.js'
import store from '../../../../store/store.js'

import {
    getUserLocationSuccess
} from './interface.js'

export const userLogin = async(payload) => {
        try {
            const result = await HTTP.post('/user/login', payload);
            store.dispatch(getUserLocationSuccess(result.data));
        } catch (error) {
            store.dispatch(getUserLocationSuccess(error));
        }
}


