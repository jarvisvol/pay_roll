import { combineReducers } from "redux";
import authReducer from '../components/screen/auth/store/reducer'

const rootReducer = combineReducers({
    authReducer
});

export default rootReducer;