import { eventAddNew, eventDeleted, eventLoaded, eventUpdated } from "../actions/eventActions";
import { fetchWithToken } from "../services/eventsAPI";
import { transformEvents } from '../helpers/transformEvents';
import Swal from "sweetalert2";

export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {

        const { uid, name } = getState().auth;
        try {

            const response = await fetchWithToken('events', event, 'POST');
            const { isCreated, id } = response;

            if (isCreated) {
                event.id = id;
                event.user = {
                    _id: uid,
                    name
                }
                dispatch(eventAddNew(event))
            }

        } catch (error) {
            console.log(error);
        }
    }
};

export const eventStartLoading = () => async (dispatch) => {

    try {
        const response = await fetchWithToken('events');
        const { events } = response;
        const transformedEvents = transformEvents(events);
        dispatch(eventLoaded(transformedEvents));
    } catch (error) {
        console.log(error);
    }


};
export const eventStartUpdating = (event) => async (dispatch) => {

    try {

        const response = await fetchWithToken(`events/${event.id}`, event, 'PUT');
        const { isUpdated, msg } = response;

        if (isUpdated) {
            dispatch(eventUpdated(event));
        } else {
            Swal.fire('Error', msg, 'error')
        }

    } catch (error) {
        console.log(error);
    }


};

export const eventStartDeleting = () => async (dispatch, getState) => {

    const { id } = getState().calendar.activeEvent;

    try {

        const response = await fetchWithToken(`events/${id}`, {}, 'DELETE');
        const { isDeleted, msg } = response;

        if (isDeleted) {
            dispatch(eventDeleted());
        } else {
            Swal.fire('Error', msg, 'error')
        }

    } catch (error) {
        console.log(error);
    }


};

