import React from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import { customStyles } from '../../helpers/customStyles';

import './modal.css'

Modal.setAppElement('#root');
const startDate = moment().minutes(0).seconds(0).add(1, 'hours');

export const CalendarModal = () => {

    const handleStartDateChange = (e) => {
        console.log(e);
    };

    const closeModal = () => {
        console.log('Closing modal...');
    };

    return (
        <Modal
            isOpen={true}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1 className="text-center text-primary"> New event </h1>
            <hr />
            <form className="container">

                <div className="form-group">
                    <label>Start date and time *</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={startDate.toDate()}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>End date and time *</label>
                    <input className="form-control" placeholder="End date" />
                </div>

                <hr />
                <div className="form-group">
                    <label>Title and notes *</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Event title"
                        name="title"
                        autoComplete="off"
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
