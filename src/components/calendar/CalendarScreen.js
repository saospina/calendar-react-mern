import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar.config";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    title: "Birthday",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    notes: "Buy something",
  },
];

export const CalendarScreen = () => {

  const eventEstyleGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: '#007acc',
      borderRadius: '0px',
      opacity: 'block',
      color:'white'
    }

    return {
      style
    }
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
      />
    </div>
  );
};
