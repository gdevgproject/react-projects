import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#FF7043",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#FFD54F",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#AED581",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#FF8A65",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#4FC3F7",
  },
  {
    skill: "Node.JS",
    level: "beginner",
    color: "#81C784",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photo="./minh.jpg" />
      <div className="data">
        <Intro
          name="Vũ Đức Minh"
          intro="Full-stack web developer in Vietnam. When not coding, I enjoy playing games, cooking delicious meals, and spending time with English."
        />

        <div className="skill-list">
          {skills.map((skill) => (
            <SkillList skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Avatar(pros) {
  return <img src={pros.photo} className="avatar" alt="Rose" />;
}

function Intro(pros) {
  return (
    <div>
      <h1>{pros.name}</h1>
      <p>{pros.intro}</p>
    </div>
  );
}

function SkillList({ skill }) {
  return (
    <div style={{ backgroundColor: skill.color }} className="skill">
      <span>{skill.skill}</span>
      {skill.level === "beginner" && <span>👶🏻</span>}
      {skill.level === "intermediate" && <span>👍🏻</span>}
      {skill.level === "advanced" && <span>💪🏻</span>}
    </div>
  );
}

export default App;
