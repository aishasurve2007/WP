import React, { useState, useEffect } from "react";
import "./Timetable.css";

export default function Timetable({ userType }) {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    // Dummy data for students
    const studentData = [
      { id: 1, day: "Monday", time: "9:00 - 10:00", subject: "Math" },
      { id: 2, day: "Tuesday", time: "10:00 - 11:00", subject: "English" },
      { id: 3, day: "Wednesday", time: "11:00 - 12:00", subject: "Science" },
      { id: 4, day: "Thursday", time: "9:00 - 10:00", subject: "History" },
      { id: 5, day: "Friday", time: "10:00 - 11:00", subject: "Art" },
    ];

    // Dummy data for teachers
    const teacherData = [
      { id: 1, day: "Monday", time: "9:00 - 10:00", subject: "Math - Class 10" },
      { id: 2, day: "Tuesday", time: "10:00 - 11:00", subject: "English - Class 9" },
      { id: 3, day: "Wednesday", time: "11:00 - 12:00", subject: "Science - Class 8" },
      { id: 4, day: "Thursday", time: "9:00 - 10:00", subject: "History - Class 7" },
      { id: 5, day: "Friday", time: "10:00 - 11:00", subject: "Art - Class 6" },
    ];

    setTimetable(userType === "teacher" ? teacherData : studentData);
  }, [userType]);

  return (
    <div className="timetable">
      <h2>{userType === "teacher" ? "Teacher" : "Student"} Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Class / Subject</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
              <td>{entry.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
