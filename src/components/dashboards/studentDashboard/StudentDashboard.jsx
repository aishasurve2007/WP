import { Routes, Route } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";
import StudentHeader from "./StudentHeader";
import StudentDashboardContent from "./StudentDashboardContent";
import Timetable from "../../Timetable";
import Courses from "../../Courses";
import View_Grades from "../../View_Grades";
import Assignments from "../../Assignments";


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

          <Route path="classes" element={<Courses userType="student" />} />
          <Route path="viewgrade" element={<View_Grades userType="student" />} />
          <Route path="assignments" element={<Assignments userType="student" />} />


          <Route path="attendence" element={<AttendanceCard userType="student" />} />

          <Route path="classes" element={<Courses userType="student" />} />
          <Route path="viewgrade" element={<View_Grades userType="student" />} />
          <Route path="assignments" element={<Assignments userType="student" />} />

        </Routes>
      </div>
    </div>
  );
}
