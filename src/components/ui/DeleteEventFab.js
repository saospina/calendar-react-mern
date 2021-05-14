import React from 'react'
import { useDispatch } from 'react-redux';
import { eventStartDeleting } from '../../thunks/eventsThunk';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();
    const handleDeleteEvent = () => {
        dispatch(eventStartDeleting())
    };

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDeleteEvent}
        >
            <i className="fas fa-trash"></i>
        </button>
    )
}
