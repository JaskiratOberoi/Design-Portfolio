import React from "react";

export default function Skill(props) {
  return (
    <div className="skill-card">
      <img alt="skill-logo" src={props.logo} />
      <h3 className="skill-name">{props.name}</h3>
    </div>
  );
}
