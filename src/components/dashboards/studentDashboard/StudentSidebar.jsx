import React, { useState } from "react";
import { HomeIcon, UserIcon, SettingsIcon, BookOpenIcon, ViewIcon} from "lucide-react";
import "./StudentSidebar.css";
import { Link } from "react-router-dom";


export default function StudentSidebar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <HomeIcon size={20} /> },
    { name: "Students", icon: <UserIcon size={20} /> },
    { name: "Classes", icon: <BookOpenIcon size={20} />, path: "/student/classes" },
    { name: "Timetable", icon: <BookOpenIcon size={20} />, path: "/student/timetable" },
    { name: "Settings", icon: <SettingsIcon size={20} /> },
    { name: "View Grade", icon: <ViewIcon size={20} />, path: "/student/View_Grades"},
    { name: "Assignments", icon: <BookOpenIcon size={20} />, path: "/student/Assignments" },
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
            <Link to={item.path} className="menu-link">
        {item.icon}
        {open && <span className="menu-text">{item.name}</span>}
      </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
