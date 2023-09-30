// Timetable.js
import React from 'react';
import schedule from '/schedule.css'

const Timetable = () => {
  // Define your timetable data here
  const timetableData = [
    // Define your schedule data here
    // Example: { time: '8:00 AM', event: 'Meeting' },
  ];

  return (
    <div className="timetable">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
