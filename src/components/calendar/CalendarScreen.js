import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar } from "../ui/Navbar";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    title: "Birthday",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
  },
];

export const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        className="container-fluid"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
