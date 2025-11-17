import React from "react";
import { Award, Download, User } from "lucide-react";
import "./ViewGrades.css"; // ensure this file exists in the same folder

export default function ViewGrades() {
  // minimal data to test rendering
  const courses = [
    { code: "GDEV201", title: "Unity Game Development", desc: "Intro to Unity & C# scripting.", instructor: "Prof. John Doe", credits: 4, grade: "A-" },
    { code: "GDES101", title: "Game Design Principles", desc: "Mechanics & player journeys.", instructor: "Maria Garcia", credits: 2, grade: "A" }
  ];

  // quick GPA calc (safe)
  const points = { "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "C": 2.0, "F": 0 };
  const totalPoints = courses.reduce((s, c) => s + (points[c.grade] || 0) * c.credits, 0);
  const totalCredits = courses.reduce((s, c) => s + c.credits, 0);
  const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "—";

  return (
    <div className="grades-container">
      <header className="grades-header">
        <div className="grades-title">
          <Award size={26} /> <h1>View Grades</h1>
        </div>

        <div className="grades-summary">
          <div className="gpa-box">
            <div className="gpa-value">{gpa}</div>
            <div className="gpa-label">Term GPA</div>
          </div>
          <button className="btn-download">
            <Download size={16} />
            <span>Download</span>
          </button>
        </div>
      </header>

      <main className="grades-list">
        {courses.map((c, i) => (
          <article className="grade-card" key={i}>
            <div className="grade-top">
              <div className="grade-left">
                <div className="course-code">{c.code}</div>
                <h2 className="course-title">{c.title}</h2>
                <p className="course-desc">{c.desc}</p>
              </div>

              <div className="grade-right">
                <div className="grade-badge">{c.grade}</div>
                <div className="course-credits">{c.credits} cr</div>
              </div>
            </div>

            <div className="grade-middle">
              <User size={14} />
              <span className="grade-instructor">{c.instructor}</span>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
