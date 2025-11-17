import React from "react";
import "./AttendanceCard.css";

export default function AttendanceCard({ studentName, attendance }) {
  const status = attendance >= 75 ? "Good" : "Low";

  return (
    <div className="attendance-container">
    <div className="attendance-card">
      <div className="header-row">
        <h3 className="title">Attendance Overview</h3>
        <span className={`status-chip ${status === "Good" ? "good" : "bad"}`}>
          {status}
        </span>
      </div>

      <div className="info">
        <p className="label">Student</p>
        <p className="student-name">{studentName}</p>
      </div>

      <div className="info">
        <p className="label">Attendance Rate</p>
        <p className="attendance-value">{attendance}%</p>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${attendance}%` }}
        ></div>
      </div>
    </div>
    </div>
  );
}
