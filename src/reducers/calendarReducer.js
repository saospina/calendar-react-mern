import moment from "moment";

import { types } from "../types/types";

const initialState = {
    events: [
        {
            title: "Birthday",
            start: moment().toDate(),
            end: moment().add(2, "hours").toDate(),
            notes: "Buy something",
            user: {
                _id: "123",
                name: "anthony",
            },
        }
    ],
    activeEvent: null
}

export const calendarReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.eventSetActive:
            return { ...state, activeEvent: payload }
        case types.eventAddNew:
            return { ...state, events: [...state.events, payload] }
        case types.eventClearActiveEvent:
            return { ...state, activeEvent: null }

        default:
            return state
    }
}
