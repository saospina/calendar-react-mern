import { types } from "../types/types";

export const eventAddNew = (payload) => ({
    type: types.eventAddNew,
    payload
});

export const eventSetActive = (payload) => ({
    type: types.eventSetActive,
    payload
})

