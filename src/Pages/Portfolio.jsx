import React from "react";

import ProjectCard from "../Components/ProjectCard";
import { projectData } from "../Constants/data/projectData";

const Portfolio = () => {
  return (
    <div className="main">
      <h1 className="p-header">My Creations (AMZN internal use only)</h1>
      <h2 className="quote">
        "Instead of worrying about what you cannot control, shift your energy to
        what you can and create something beautiful."
      </h2>

      <div className="project-cards">
        {projectData.map((data) => (
          <ProjectCard
            url={data.url}
            bannerSrc={data.bannerSrc}
            title={data.title}
            designDetails={data.designDetails}
            devDetails={data.devDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
