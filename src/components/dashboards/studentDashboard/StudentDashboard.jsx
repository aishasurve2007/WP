import { Routes, Route } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";
import StudentHeader from "./StudentHeader";
import StudentDashboardContent from "./StudentDashboardContent";
import Timetable from "../../Timetable";
<<<<<<< HEAD
import AttendanceCard from "../../AttendanceCard";
=======
import Courses from "../../Courses";
import View_Grades from "../../View_Grades";
import Assignments from "../../Assignments";
>>>>>>> 7c6ec76 (Add assignments and courses components and update dashboards)

export default function StudentDashboard() {
  return (
    <div className="app">
      <StudentSidebar />
      <div className="main">
        <StudentHeader />
        <Routes>
          <Route path="/" element={<StudentDashboardContent />} />
          <Route path="timetable" element={<Timetable userType="student" />} />
<<<<<<< HEAD
          <Route path="attendence" element={<AttendanceCard userType="student" />} />
=======
          <Route path="classes" element={<Courses userType="student" />} />
          <Route path="viewgrade" element={<View_Grades userType="student" />} />
          <Route path="assignments" element={<Assignments userType="student" />} />
>>>>>>> 7c6ec76 (Add assignments and courses components and update dashboards)
        </Routes>
      </div>
    </div>
  );
}
