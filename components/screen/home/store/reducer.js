import * as types from './action-types';

const initialState = {
    mydata: '',
    loginData: {},
    error: {},
    statusOfActions: '',
    isLoading: false,
    registerData: {}
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_LOCATION:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_USER_LOCATION_SUCCESS:
            return {
                ...state,
                userLocation: action.result.data,
                statusOfActions: action.type,
                isLoading: false
            }
        case types.GET_USER_LOCATION_FAILURE:
            return {
                ...state,
                error: action.error,
                statusOfActions: action.type
            }
        default:
            return {
                ...state
            };
    }
}

export default userReducer;
