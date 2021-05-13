import { eventAddNew, eventLoaded } from "../actions/eventActions";
import { fetchWithToken } from "../services/eventsAPI";

export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {

        const { uid, name } = getState().auth;
        try {

            const response = await fetchWithToken('events', event, 'POST');
            const { isCreated, id } = response;

            if (isCreated) {
                event.id = id;
                event.user = {
                    uid,
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
        const response = await fetchWithToken('events', 'GET');
        const { events } = response;
        console.log(events);
        //dispatch(eventLoaded(events));
    } catch (error) {
        console.log(error);
    }


};

