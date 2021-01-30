import React from "react";
import SkillSection from "../Components/SkillSection";

import { skillData } from "../Constants/data/skillsData";

const Skills = () => {
  return (
    <div className="s-main">
      {skillData.map((data) => (
        <SkillSection title={data.title} skills={data.skills} />
      ))}
    </div>
  );
};

export default Skills;
