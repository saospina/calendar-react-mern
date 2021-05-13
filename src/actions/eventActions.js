import { types } from "../types/types";

export const eventAddNew = (payload) => ({
    type: types.eventAddNew,
    payload
});

export const eventSetActive = (payload) => ({
    type: types.eventSetActive,
    payload
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent

});

export const eventUpdated = (payload) => ({
    type: types.eventUpdate,
    payload
});

export const eventDeleted = () => ({
    type: types.eventDeleted
});

export const eventLoaded = (payload) => ({
    type: types.eventLoaded,
    payload
})





