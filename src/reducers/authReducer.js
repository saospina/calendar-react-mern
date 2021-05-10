import { types } from "../types/types"


const initialState = {
    checking: true,
    /* uid:null,
    name:null */

}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.authLogin:
            return { ...state, checking: false, ...payload }

        default:
            return state
    }
}
