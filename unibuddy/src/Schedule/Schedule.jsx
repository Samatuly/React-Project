import React, {useState, useEffect } from "react";
import './Schedule.css';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db, firestore, auth } from "../Firebase/Firebase";

const hours = [];
for (let i = 8; i <= 22; i++) {
    hours.push(`${i < 10 ? '0' : ''}${i}:00`);
}

const Days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Schedule = (props) => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const fetchSchedule = async () => {
            const user = auth.currentUser;
            // if(user.uid != null){
            //     console.log(user.uid);
            // }

            if (user) {
                const userUID = user.uid;
                const scheduleCollection = collection(firestore, 'schedule', user.uid, user.uid);
                const scheduleQuery = query(scheduleCollection, where("userUID", "==", userUID));
                const scheduleSnapshot = await getDocs(scheduleQuery);
                const scheduleData = scheduleSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSchedule(scheduleData);
            }
        };

        fetchSchedule();
    }, []);

    return (
        <div className="schedule">
            <div className="days">
                {Days.map((day) => (
                    <div key={day} className="day">
                        {day}
                    </div>
                ))}
            </div>

            <div className="hours">
                {hours.map((time) => (
                    <div key={time} className="hour">
                        {time}
                        <div className="schedule-cell">
                            {schedule.map((entry) => {
                                if (entry.end_time > time && entry.start_time <= time && entry.day === 'Monday') {
                                    return (
                                        <div key={`${entry.day}-${entry.start_time}`} className="schedule-item">
                                            {entry.subject} {entry.type}
                                        </div>
                                    );

                                }
                                return null;
                            })}
                        </div>
                        <div className="schedule-cell">
                            {schedule.map((entry) => {
                                if (entry.end_time > time && entry.start_time <= time && entry.day === 'Tuesday') {
                                    return (
                                        <div key={`${entry.day}-${entry.start_time}`} className="schedule-item">
                                            {entry.subject} {entry.type}
                                        </div>
                                    );

                                }
                                return null;
                            })}
                        </div>
                        <div className="schedule-cell">
                            {schedule.map((entry) => {
                                if (entry.end_time > time && entry.start_time <= time && entry.day === 'Wednesday') {
                                    return (
                                        <div key={`${entry.day}-${entry.start_time}`} className="schedule-item">
                                            {entry.subject} {entry.type}
                                        </div>
                                    );

                                }
                                return null;
                            })}
                        </div>
                        <div className="schedule-cell">
                            {schedule.map((entry) => {
                                if (entry.end_time > time && entry.start_time <= time && entry.day === 'Thursday') {
                                    return (
                                        <div key={`${entry.day}-${entry.start_time}`} className="schedule-item">
                                            {entry.subject} {entry.type}
                                        </div>
                                    );

                                }
                                return null;
                            })}
                        </div>
                        <div className="schedule-cell">
                            {schedule.map((entry) => {
                                if (entry.end_time > time && entry.start_time <= time && entry.day === 'Friday') {
                                    return (
                                        <div key={`${entry.day}-${entry.start_time}`} className="schedule-item">
                                            {entry.subject} {entry.type}
                                        </div>
                                    );

                                }
                                return null;
                            })}
                        </div>
                        <div className="schedule-cell">
                            {schedule.map((entry) => {
                                if (entry.end_time > time && entry.start_time <= time && entry.day === 'Saturday') {
                                    return (
                                        <div key={`${entry.day}-${entry.start_time}`} className="schedule-item">
                                            {entry.subject} {entry.type}
                                        </div>
                                    );

                                }
                                return null;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Schedule;
