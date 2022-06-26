import { combineReducers } from "redux";

import userReducer from "./UserReducer";
import authenticationReducer  from './AuthenticationReducer';
import shipmentReducer from './ShipmentReducer';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
    userReducer,
    shipmentReducer,
    loginReducer,
    authenticationReducer
})

export default rootReducer;