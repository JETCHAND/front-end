const initialState = {
    loggedInUser : null
}

export default function authenticationReducer(state = initialState, action) {

    if (action.type === 'LOGIN_SUCCESS') {
        console.log(action.payload);
        return ({
            ...state,
            loggedInUser: action.payload
        })
    }
    
    else {
        return state;
    }
}
