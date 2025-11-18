import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardContent from "./DashboardContent";
import Timetable from "../../TeacherTimetable";
import Attendance from "../../TeacherAttendance";
import TeacherCourses from "../../TeacherCourses";
import TeacherGrades from "../../TeacherGrades";

export default function TeacherDashboard() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="timetable" element={<Timetable userType="teacher" />} />
          <Route path="attendance" element={<Attendance userType="teacher" />} />
          <Route path="classes" element={<TeacherCourses userType="teacher" />} />
          <Route path="grades" element={<TeacherGrades userType="teacher" />} />
        </Routes>
      </div>
    </div>
  );
}
