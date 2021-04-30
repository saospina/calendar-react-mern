import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { messages } from "../../helpers/calendar.config";
import { Navbar } from "../ui/Navbar";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

import { uiOpenModal } from "../../actions/uiActions";
import { eventClearActiveEvent, eventSetActive } from "../../actions/eventActions";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment); // or globalizeLocalizer


//Component for big calendar
export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);

  const onDoubleClick = () => {
    dispatch(uiOpenModal())
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e)
  };

  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent())

  };



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
        onSelectSlot={onSelectSlot}
        selectable={true}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
      {
        activeEvent && <DeleteEventFab />
      }
      <AddNewFab />
    </div>
  );
};
