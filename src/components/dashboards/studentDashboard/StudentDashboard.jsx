import { Routes, Route } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";
import StudentHeader from "./StudentHeader";
import StudentDashboardContent from "./StudentDashboardContent";
import Timetable from "../../Timetable";
import AttendanceCard from "../../AttendanceCard";

export default function StudentDashboard() {
  return (
    <div className="app">
      <StudentSidebar />
      <div className="main">
        <StudentHeader />
        <Routes>
          <Route path="/" element={<StudentDashboardContent />} />
          <Route path="timetable" element={<Timetable userType="student" />} />
          <Route path="attendence" element={<AttendanceCard userType="student" />} />
        </Routes>
      </div>
    </div>
  );
}
