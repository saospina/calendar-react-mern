import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { messages } from "../../helpers/calendar.config";
import { Navbar } from "../ui/Navbar";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

import { uiOpenModal } from "../../actions/uiActions";
import { eventSetActive } from "../../actions/eventActions";
import { AddNewFab } from "../ui/AddNewFab";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    title: "Birthday",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    notes: "Buy something",
    user: {
      _id: "123",
      name: "anthony",
    },
  },
];

//Component for big calendar
export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
  const dispatch = useDispatch();

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
    dispatch(uiOpenModal())
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e)
  }



  const eventEstyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#007acc",
      borderRadius: "0px",
      opacity: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        className="container-fluid"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventEstyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
      <AddNewFab />
    </div>
  );
};
