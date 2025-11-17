import React from "react";
import {
  FileText,
  Calendar,
  User,
  Paperclip,
  CheckCircle,
  Clock
} from "lucide-react";
import "./Assignments.css";

export default function Assignments() {
  const assignments = [
    {
      title: "Level Design Report",
      desc: "Short analysis of player flow in level 3.",
      instructor: "Prof. John Doe",
      due: "2025-12-01",
      credits: 2,
      attachments: 1,
      status: "Submitted"
    },
    {
      title: "Character Model Sheet",
      desc: "2 views + profile for main character.",
      instructor: "Jane Smith",
      due: "2025-12-07",
      credits: 3,
      attachments: 2,
      status: "Pending"
    },
    {
      title: "Prototype Playtest Notes",
      desc: "Collect and summarize 5 playtest sessions.",
      instructor: "Alex Johnson",
      due: "2025-12-10",
      credits: 1,
      attachments: 0,
      status: "Overdue"
    }
  ];

  const statusClass = (s) =>
    s === "Submitted" ? "status-submitted" : s === "Pending" ? "status-pending" : "status-overdue";

  return (
    <div className="assign-container">
      <h1 className="assign-header">
        <FileText size={28} /> Assignments
      </h1>

      <div className="assign-list">
        {assignments.map((a, i) => (
          <article className="assign-card" key={i}>
            <div className="assign-top">
              <div className="assign-title-wrap">
                <h2 className="assign-title">{a.title}</h2>
                <p className="assign-small-desc">{a.desc}</p>
              </div>

              <div className="assign-right">
                <div className="assign-due">
                  <Calendar size={16} />
                  <span className="assign-due-text">{a.due}</span>
                </div>
                <div className="assign-credits">{a.credits} cr</div>
              </div>
            </div>

            <div className="assign-middle">
              <User size={16} />
              <span className="assign-instructor">{a.instructor}</span>
            </div>

            <div className="assign-bottom">
              <div className={`assign-status ${statusClass(a.status)}`}>
                {a.status === "Submitted" && <CheckCircle size={14} />}
                {a.status === "Pending" && <Clock size={14} />}
                <span className="status-text">{a.status}</span>
              </div>
              
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
