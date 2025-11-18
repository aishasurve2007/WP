import React from "react";
import { useNavigate } from "react-router-dom"; // added
import "./StudentDashboardContent.css";

export default function StudentDashboardContent() {
  const stats = [
    { title: "Assignments", value: 1200, color: "#3b82f6" },
    { title: "Timetable", value: 50, color: "#10b981" },
    { title: "Courses", value: 30, color: "#f59e0b" },
    { title: "Attendance", value: "95%", color: "#ef4444" },
  ];

  const recentStudents = [
    { name: "CS", enrolled: "1 DAY DUE" },
    { name: "DS", enrolled: "5 DAY DUE" },
    { name: "WP", enrolled: "1 WEEK DUE" },
  ];

  const recentActivities = [
    "Math class updated",
    "New teacher added",
    "Exam schedule released",
    "Library books updated",
  ];

  const activeCourses = [
    { name: "CS", students: 80 },
    { name: "DS", students: 84 },
    { name: "WP", students: 90 },
  ];

  const navigate = useNavigate(); // added

  return (
    <div className="dashboard-content">
      {/* Top Stats */}
      <div className="stats-grid">
        {stats.map((stat) => {
          // Map card titles to routes
          let path = "";
          switch (stat.title) {
            case "Assignments":
              path = "assignments";
              break;
            case "Timetable":
              path = "timetable";
              break;
            case "Courses":
              path = "classes";
              break;
            case "Attendance":
              path = "attendance";
              break;
            default:
              path = "/";
          }

          return (
            <div
              key={stat.title}
              className="card"
              style={{ borderTop: `4px solid ${stat.color}`, cursor: "pointer" }} // added cursor
              onClick={() => navigate(path)} // added navigation
            >
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Two Column Section */}
      <div className="dashboard-row">
        {/* Recent Students */}
        <div className="card recent-students">
             <h3>Recent Assignments</h3>
                 <ul>
                   {recentStudents.map((student) => (
                    <li key={student.name} className="student-row">
                      <span className="student-name">{student.name}</span>
                      <span className="student-time">{student.enrolled}</span>
                    </li>
                     ))}
                 </ul>
        </div>

        {/* Recent Activities */}
        <div className="card recent-activities">
          <h3>Recent Activity</h3>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index} className="activity-row">{activity}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Active Courses */}
      <div className="card active-courses">
        <h3>Grades</h3>
        <ul>
          {activeCourses.map((course) => (
            <li key={course.name} className="course-row">
              <span className="course-name">{course.name}</span>
              <span className="course-students">{course.students} Students</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
