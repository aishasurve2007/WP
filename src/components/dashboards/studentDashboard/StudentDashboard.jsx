import { Routes, Route } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";
import StudentHeader from "./StudentHeader";
import StudentDashboardContent from "./StudentDashboardContent";
import Timetable from "../../Timetable";
import AttendanceCard from "../../AttendanceCard"; // from remote HEAD
import Courses from "../../Courses";               // from your local changes
import ViewGrades from "../../ViewGrades";
import Assignments from "../../Assignments";

export default function StudentDashboard() {
  return (
    <div className="app">
      <StudentSidebar />
      <div className="main">
        <StudentHeader />
        <Routes>
          <Route path="/" element={<StudentDashboardContent />} />
          <Route path="timetable" element={<Timetable userType="student" />} />
          <Route path="attendence" element={<AttendanceCard userType="student" />} /> {/* keep remote route */}
          <Route path="classes" element={<Courses userType="student" />} />
          <Route path="viewgrades" element={<ViewGrades userType="student" />} />
          <Route path="assignments" element={<Assignments userType="student" />} />
        </Routes>
      </div>
    </div>
  );
}
