import React, { useState } from "react";
import { HomeIcon, SettingsIcon, BookOpenIcon, ViewIcon } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <HomeIcon size={20} /> },
    { name: "Classes", icon: <BookOpenIcon size={20} /> , path: "/teacher/TeacherCourses" },
    { name: "Timetable", icon: <BookOpenIcon size={20} />, path: "/teacher/TeacherTimetable" },
    { name: "Attendance", icon: <SettingsIcon size={20} />, path: "/teacher/TeacherAttendance" },
    { name: "Grades", icon: <ViewIcon size={20} />, path: "/teacher/TeacherGrades" },
  ];

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "«" : "»"}
      </button>
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            {open && <span className="menu-text">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
