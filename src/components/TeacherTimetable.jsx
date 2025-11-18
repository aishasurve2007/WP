import React, { useState } from "react";
import "./TeacherTimetable.css";

export default function TeacherTimetable() {
  // Sample timetable data
  const [timetable, setTimetable] = useState([
    { id: 1, day: "Monday", time: "09:00 - 10:00", subject: "Math", classroom: "101" },
    { id: 2, day: "Monday", time: "10:30 - 11:30", subject: "Physics", classroom: "102" },
    { id: 3, day: "Tuesday", time: "09:00 - 10:00", subject: "Chemistry", classroom: "103" },
    { id: 4, day: "Wednesday", time: "11:00 - 12:00", subject: "English", classroom: "104" },
  ]);

  return (
    <div className="teacher-timetable-container">
      <h2>My Timetable</h2>
      <div className="timetable-grid">
        {timetable.map((slot) => (
          <div key={slot.id} className="timetable-card">
            <div className="timetable-day">{slot.day}</div>
            <div className="timetable-subject">{slot.subject}</div>
            <div className="timetable-time">{slot.time}</div>
            <div className="timetable-classroom">Room: {slot.classroom}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
