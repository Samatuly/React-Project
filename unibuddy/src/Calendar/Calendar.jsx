import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import EventComponent from "../EventComponent/EventComponent.jsx";
import "./Calendar.css";
const events = [
  {
    id: 1,
    title: "React Final",
    start: new Date(2023, 11, 19, 9, 0),
    end: new Date(2023, 11, 19, 12, 0),
    description: "In the 404 study room",
  },
  {
    id: 2,
    title: "Go Home and Chill",
    start: new Date(2023, 11, 19, 12, 0),
    end: new Date(2023, 11, 19, 23, 0),
    description: "In the 404 study room",
  },
  // Add more events as needed
];

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  return (
    <div className="calendar-wrapper">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default MyCalendar;
