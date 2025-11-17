import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/dashboards/adminDashboard/Sidebar";
import Header from "./components/dashboards/adminDashboard/Header";
import DashboardContent from "./components/dashboards/adminDashboard/DashboardContent";
import StudentSidebar from "./components/dashboards/studentDashboard/StudentSidebar";
import StudentHeader from "./components/dashboards/studentDashboard/StudentHeader";
import StudentDashboardContent from "./components/dashboards/studentDashboard/StudentDashboardContent";
import StudentDashboard from "./components/dashboards/studentDashboard/StudentDashboard";
const userType = "student";



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
          path="/admin"
          element={
            <div className="app">
              <Sidebar />
              <div className="main">
                <Header />
                <DashboardContent />
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