import { deleteUsers, fetchUserById, fetchUsers, modifyUser, saveUser, userLogin } from "../../services/UserServices";
import { DELETE_USER_SUCCESS, LOGIN_SUCCESS, USER_ADD, USER_FETCHALL, USER_FETCHBYID, USER_UPDATE } from "./ActionConstants";

export function getAllUsers() {
    return (dispatch) => {
        return fetchUsers().then(
            resp => {
                dispatch(getAllUserSuccess(resp.data));
            }
        )
    }
}

export function getAllUserSuccess(data) {
    return {
        type: USER_FETCHALL,
        payload: data
    }
}

export function getUserDetails(id) {
    return (dispatch) => {
        return fetchUserById(id).then(resp => {
            console.log(resp.status);
            dispatch(getUserByIdSuccess(resp.data))
        })
    }
}

export function getUserByIdSuccess(data) {
    return {
        type: USER_FETCHBYID,
        payload: data
    }
}

export function addUser(user) {

    return (dispatch) => {
        return saveUser(user).then(
            resp => {
                dispatch(addUserSuccess(resp.data));
            }
        )
    }
}

export function addUserSuccess(data) {
    return {
        type: USER_ADD,
        payload: data
    }
}

export function updateUser(user) {

    return (dispatch) => {
        return modifyUser(user).then(
            resp => {
                dispatch(updateUserSuccess(resp.data));
            }
        )
    }
}

export function updateUserSuccess(data) {
    return {
        type: USER_UPDATE,
        payload: data
    }
}

export function doUserLogin(user) {
    return (dispatch) => {
        return userLogin(user).then(
            resp => {
                console.log(resp);
                localStorage.setItem("myUser",JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
            }
        )  
        // .catch(error=> {
        //    // console.log(error);
        // })     
    }
}

export function doLoginSuccess(data) {

    return {
        type : LOGIN_SUCCESS,
        payload: data
    }
}


export function deleteUser(id) {
    return (dispatch) => {
        return deleteUsers(id).then(
            resp => {
                
            } 
        )  
          
    }
}

export function deleteUserSuccess(data) {

    return {
        type : DELETE_USER_SUCCESS,
        payload: data
    }
}






