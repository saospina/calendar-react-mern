import Swal from "sweetalert2";

import { checkingFinish, login, logout } from "../actions/authActions";
import { authLoginService, authRegisterService, getToken } from "../services/authAPI";


export const startLoginEmailPass = (email, password) => async (dispatch) => {

    const response = await authLoginService({ email, password });
    const { isAuthenticated, token, uid, name, msg } = response;

    if (isAuthenticated) {
        localStorage.setItem('token', token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({ uid, name }));
    } else {
        Swal.fire('Error', msg, "error")
    }
};

export const startRegister = (name, email, password) => async (dispatch) => {

    const response = await authRegisterService({ name, email, password });
    const { ok, token, uid, name: username, msg } = response;

    if (ok) {
        localStorage.setItem('token', token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({ uid, username }));
    } else {
        Swal.fire('Error', msg, "error")
    }

};

export const startChecking = () => async (dispatch) => {

    const response = await getToken();
    const { isAuthenticated, token, uid, name } = response;

    if (isAuthenticated) {
        localStorage.setItem('token', token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(login({ uid, name }));
    } else {
        dispatch(checkingFinish())
    }

};

export const startLogout = () => async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
};