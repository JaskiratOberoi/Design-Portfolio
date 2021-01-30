import React from "react";
import SkillCard from "./SkillCard";

const SkillSection = (props) => {
  return (
    <div className="skill-section">
      <h1>{props.title}</h1>
      <div className="skill-container">
        {props.skills.map((skill) => (
          <SkillCard name={skill.title} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
