import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/dashboards/teacherDashboard/Sidebar";
import Header from "./components/dashboards/teacherDashboard/Header";
import DashboardContent from "./components/dashboards/teacherDashboard/DashboardContent";
import StudentSidebar from "./components/dashboards/studentDashboard/StudentSidebar";
import StudentHeader from "./components/dashboards/studentDashboard/StudentHeader";
import StudentDashboardContent from "./components/dashboards/studentDashboard/StudentDashboardContent";
import StudentDashboard from "./components/dashboards/studentDashboard/StudentDashboard";
import TeacherDashboard from "./components/dashboards/teacherDashboard/teacherDashboard";
const userType = "teacher";



import "./index.css";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/student/*"
          element={
            <StudentDashboard />
          }
        />
        {/* Admin Dashboard */}
        <Route
          path="/teacher/*"
          element={
            <div className="app">
              
              <div className="main">
              
                <TeacherDashboard />
              </div>
            </div>
          }
        />

        {/* Student Dashboard */}

        
        

        {/* Default redirect */}
        <Route path="/" element={<h1>does not exist as of now</h1>} />

        {/* Catch all */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}