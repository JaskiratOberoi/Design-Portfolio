import React from "react";

const SkillCard = (props) => {
  return (
    <div className="skill-card">
      <img className="skill-logo" alt="skill-logo" src={props.logo} />
      <h3 className="skill-name">{props.name}</h3>
    </div>
  );
};

export default SkillCard;
