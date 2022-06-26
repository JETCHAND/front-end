import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';


export function fetchUsers() {
    return Axios.get(BASE_URL + "/user/all");
}

export function fetchUserById(id) {
    return Axios.get( BASE_URL + "/user/find/" + id);
}

export function saveUser(user) {
    return Axios.post(BASE_URL + "/user/save",user);
}

export function modifyUser(user) {
    return Axios.put(BASE_URL + "/user/update", user);
}

export function deleteUsers(id) {
    return Axios.delete(BASE_URL + "/user/delete/" + id);
}

export function userLogin(user) {
    return Axios.post(BASE_URL + "/user/login",user);
}