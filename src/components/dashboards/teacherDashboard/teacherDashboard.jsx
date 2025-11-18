import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardContent from "./DashboardContent";
import Timetable from "../../TeacherTimetable";
import Attendance from "../../TeacherAttendance";
import TeacherCourses from "../../TeacherCourses";
import Grades from "../../TeacherGrades";

export default function teacherDashboard() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="timetable" element={<Timetable userType="teacher" />} />
          <Route path="attendence" element={<Attendance userType="teacher" />} />
          <Route path="classes" element={<TeacherCourses userType="teacher" />} />
          <Route path="grades" element={<Grades userType="teacher" />} />
        </Routes>
      </div>
    </div>
  );
}
