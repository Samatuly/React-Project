import React, {useState, useEffect } from "react";
import './Schedule.css';
import { collection, getDocs, where, query } from 'firebase/firestore';
import {firestore, auth } from "../Firebase/Firebase";

const hours = [];
for (let i = 8; i <= 22; i++) {
    hours.push(`${i < 10 ? '0' : ''}${i}:00`);
}

const Days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Schedule = (props) => {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthStatus = () => {
          const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              setAuthenticated(true);
              fetchSchedule(user);
            } else {
              setAuthenticated(false);
              setLoading(false);
            }
          });
    
          return () => unsubscribe();
        };
    
        checkAuthStatus();
    }, []);

    const fetchSchedule = async (user) => {
        const userUID = user.uid;
        const scheduleCollection = collection(firestore, 'users', user.uid, user.uid);
        const scheduleQuery = query(scheduleCollection, where("userUID", "==", userUID));
        try {
          const scheduleSnapshot = await getDocs(scheduleQuery);
    
          if (scheduleSnapshot.docs.length > 0) {
            const scheduleData = scheduleSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setSchedule(scheduleData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      };

    if (loading) {
        return <div className="schedule-loading">Loading schedule...</div>;
    }

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
                                else{
                                    console.log("doesn't work");
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
