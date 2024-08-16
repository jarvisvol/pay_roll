import * as types from './action-types';



export const getUserLocationSuccess = (result) =>{
    return {
        type: types.GET_USER_LOCATION_SUCCESS,
        result: result
    }
}

export const getUserLocationFailure = (error) =>{
    return {
        type: types.GET_USER_LOCATION_FAILURE,
        error: error.result
    }
}