import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const EventComponent = ({ event }) => (
  <div>
    <strong>{event.title}</strong>
    <p>{event.description}</p>
  </div>
);

export default EventComponent;
