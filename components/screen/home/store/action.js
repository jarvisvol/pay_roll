import * as types from './action-types';
import * as API from './api'

export const getUserLocation = (payload) => {
    const request = API.userLogin(payload);
    return {
        payload: request,
        type: types.GET_USER_LOCATION
    }
}

