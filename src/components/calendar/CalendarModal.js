import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

import { customStyles } from '../../helpers/customStyles';
import { uiCloseModal } from '../../actions/uiActions';
import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/eventActions';

import './modal.css'

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');

const initialState = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}

// Calendar Modal component
export const CalendarModal = () => {

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
    const [formValues, setFormValues] = useState({ initialState });
    const { notes, title, start, end } = formValues;
    const [titleValid, setTitleValid] = useState(true);

    const { modalOpen } = useSelector(state => state.ui);
    const { activeEvent } = useSelector(state => state.calendar);
    const dispatch = useDispatch();


    useEffect(() => {
        if (activeEvent) {
            setFormValues(activeEvent)
        } else {
            setFormValues(initialState)
        }

    }, [activeEvent])


    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            console.log(momentStart, 'start');
            console.log(momentEnd, 'end');
            return Swal.fire('Error', 'Date end must be greater than date start', 'error')
        };

        if (title.trim().length < 3) {
            return setTitleValid(false);
        };

        if (activeEvent) {
            dispatch(eventUpdated(formValues))
        } else {

            dispatch(eventAddNew({
                ...formValues,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'andre'
                }
            }));
        }

        setTitleValid(true);
        closeModal();


    };

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        })
    };

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    };

    const closeModal = () => {
        dispatch(eventClearActiveEvent());
        dispatch(uiCloseModal());
        setFormValues(initialState);
    };

    return (
        <Modal
            isOpen={modalOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1 className="text-center text-primary"> {(activeEvent) ? 'Edit event' : 'New event'} </h1>
            <hr />
            <form
                className="container"
                onSubmit={handleSubmitForm}
            >

                <div className="form-group">
                    <label>Start date and time *</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={dateStart}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>End date and time *</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        minDate={dateStart}
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Title and notes *</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Event title"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />

                    {/* <small id="emailHelp" className="form-text text-muted">Short description</small> */}
                </div>

                <div className="form-group">
                    <small id="emailHelp" className="form-text text-muted">Short description</small>
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notes"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Aditional information</small>
                </div>

                <button
                    style={{ width: "100%" }}
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Save</span>
                </button>

            </form>

        </Modal>
    )
};
