import { types } from "../types/types";

export const login = (payload) => ({
    type: types.authLogin,
    payload
});

export const checkingFinish = () => ({
    type: types.authFinish
});

export const logout = () => ({
    type: types.authLogout
})


