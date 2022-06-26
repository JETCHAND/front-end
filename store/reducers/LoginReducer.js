import { LOGIN_SUCCESS } from "../actions/ActionConstants";

const initialState = {
    loggedInUser : null
}

export default function loginReducer(state = initialState, action) {

    if(action.type === LOGIN_SUCCESS) {
        console.log(action.payload);
        console.log(action.type);
        return ({
            ...state,
            loggedInUser : action.payload
        })
    }

    else {
        return state;
    }
}