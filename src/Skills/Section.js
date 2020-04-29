import React from "react";
import Skill from "./Skill";

export default function Section(props) {
  return (
    <div className="skill-section">
      <h1>{props.title}</h1>
      <div className="skill-container">
        {props.skills.map((skill) => (
          <Skill name={skill.title} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
}
