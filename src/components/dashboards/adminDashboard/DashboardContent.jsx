import React from "react";
import "./DashboardContent.css";
import { Users, UserCheck, BookOpen, Activity } from "lucide-react";


export default function DashboardContent() {
 const stats = [
  { title: "Total Students", value: 1200, color: "#3b82f6", icon: <Users size={24} /> },
  { title: "Teachers", value: 50, color: "#10b981", icon: <UserCheck size={24} /> },
  { title: "Classes", value: 30, color: "#f59e0b", icon: <BookOpen size={24} /> },
  { title: "Attendance", value: "95%", color: "#ef4444", icon: <Activity size={24} /> },
];


  const recentStudents = [
    { name: "Alice Johnson", enrolled: "2 days ago" },
    { name: "Bob Smith", enrolled: "5 days ago" },
    { name: "Clara Lee", enrolled: "1 week ago" },
  ];

  const recentActivities = [
    "Math class updated",
    "New teacher added",
    "Exam schedule released",
    "Library books updated",
  ];

  const activeCourses = [
    { name: "Mathematics", students: 120 },
    { name: "Physics", students: 80 },
    { name: "History", students: 60 },
  ];

  return (
    <div className="dashboard-content">
      {/* Top Stats */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="card"
            style={{ borderTop: `4px solid ${stat.color}` }}
          >
            <div className="card-header">
               {stat.icon}<h3>{stat.title}</h3>
            </div>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Two Column Section */}
      <div className="dashboard-row">
        {/* Recent Students */}
        <div className="card recent-students">
             <h3>Recent Students Enrolled</h3>
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
        <h3>Active Courses</h3>
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
