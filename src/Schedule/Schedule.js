import React from "react";
import './Schedule.css';

const hours = [];
for(let i = 8; i <= 22; i++){
    hours.push(`${i < 10 ? '0' : ''}${i}:00`);
}
const Days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const Schedule = (props) => {
    return (
        <div className="schedule">
            <div className="days">
                {Days.map((day) => (
                    <div key = {day} className="day">
                        {day}
                    </div>
                ))}
            </div>

            <div className="hours">
                {hours.map((time) => (
                    <div key = {time} className="hour">
                        {time}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Schedule;