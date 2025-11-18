import React, { useState } from "react";
import "./TeacherCourses.css";

export default function TeacherCourses() {
  // Sample courses data
  const [courses] = useState([
    { id: 1, name: "Mathematics", code: "MATH101", semester: "Fall 2025" },
    { id: 2, name: "Physics", code: "PHY102", semester: "Fall 2025" },
    { id: 3, name: "Chemistry", code: "CHEM103", semester: "Spring 2026" },
    { id: 4, name: "English Literature", code: "ENG104", semester: "Spring 2026" },
  ]);

  return (
    <div className="teacher-courses-container">
      <h2>My Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-name">{course.name}</div>
            <div className="course-code">{course.code}</div>
            <div className="course-semester">{course.semester}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
