import React, { useState } from "react";
import "./TeacherAttendance.css";

export default function TeacherAttendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", attendance: "Present" },
    { id: 2, name: "Jane Smith", attendance: "Absent" },
    { id: 3, name: "Alice Johnson", attendance: "Present" },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    attendance: "Present",
  });

  // Update attendance for a student
  const updateAttendance = (id, value) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, attendance: value } : s))
    );
  };

  // Add new student
  const addStudent = () => {
    if (!newStudent.name) return;
    setStudents([
      ...students,
      { id: Date.now(), ...newStudent },
    ]);
    setNewStudent({ name: "", attendance: "Present" });
  };

  return (
    <div className="teacher-attendance-container">
      <h2>Teacher Attendance</h2>

      <div className="add-student">
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <select
          value={newStudent.attendance}
          onChange={(e) => setNewStudent({ ...newStudent, attendance: e.target.value })}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="students-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <div>{student.name}</div>
            <select
              value={student.attendance}
              onChange={(e) => updateAttendance(student.id, e.target.value)}
              className="attendance-select"
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
