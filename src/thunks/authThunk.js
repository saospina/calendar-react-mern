import { login } from "../actions/authActions";
import { authLoginService } from "../services/authAPI";


export const startLoginEmailPass = (email, password) => async (dispatch) => {

    const response = await authLoginService({ email, password });
    const { isAuthenticated, token, uid, name } = response;
    
    if (isAuthenticated) {
        localStorage.setItem('token', token);
        localStorage.setItem('token-init-date', new Date().getTime());
    }
    dispatch(login({uid, name}))


};