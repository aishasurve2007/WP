import { Routes, Route } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";
import StudentHeader from "./StudentHeader";
import StudentDashboardContent from "./StudentDashboardContent";
import Timetable from "../../Timetable";

export default function StudentDashboard() {
  return (
    <div className="app">
      <StudentSidebar />
      <div className="main">
        <StudentHeader />
        <Routes>
          <Route path="/" element={<StudentDashboardContent />} />
          <Route path="timetable" element={<Timetable userType="student" />} />
        </Routes>
      </div>
    </div>
  );
}
