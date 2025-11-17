import React from "react";
import "./Courses.css";

export default function Courses() {
  const courses = [
    { 
      title: "Unity Game Development", 
      instructor: "John Doe", 
      credits: 4, 
      desc: "Learn Unity engine and C# scripting."
    },
    { 
      title: "Unreal Engine Masterclass", 
      instructor: "Jane Smith", 
      credits: 5, 
      desc: "Master Unreal Engine and Blueprints."
    },
    { 
      title: "3D Modeling with Blender", 
      instructor: "Alex Johnson", 
      credits: 3, 
      desc: "Create assets, characters, and environments."
    },
    { 
      title: "Game Design Principles", 
      instructor: "Maria Garcia", 
      credits: 2, 
      desc: "Understand game mechanics and player engagement."
    },
    { 
      title: "Figma UI/UX Design", 
      instructor: "David Lee", 
      credits: 2, 
      desc: "Design intuitive interfaces using Figma."
    },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-header">Courses</h1>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-header">
              <h2 className="course-title">{course.title}</h2>
              <span className="course-credits">{course.credits} Credits</span>
            </div>
            <p className="course-desc">{course.desc}</p>
            <p className="course-instructor">{course.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
