import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#008080",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#808080",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#FF00FF",
  },
  {
    skill: "Web Development",
    level: "beginner",
    color: "#C0C0C0",
  },
];

function App() {
  return (
    <div className="card">
      <Photo />
      <div className="data">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
}

function Photo() {
  return <img className="photo" src="image.jpg" alt="me" />;
}

function Intro() {
  return (
    <div className="description">
      <h1>Kyriaki Savvoulidou</h1>
      <p>
        My goal is to be a successful Full-stack web developer and a teacher.
        When not coding or studying, I like to do yoga, listen to music, or just
        enjoying walking around.
      </p>
    </div>
  );
}

function SkillSet() {
  return (
    <div className="skill-set">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "🙌"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
