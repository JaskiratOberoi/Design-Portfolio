import React from "react";

import { portfolioData } from "../Constants/data/portfolioData";



const Portfolio = () => {
  return (
    <div className="main">
      <h1 className="p-header">My Creations</h1>
      <h2 className="quote">
        "Instead of worrying about what you cannot control, shift your energy to
        what you can create"
      </h2>

      <div className="project-cards">

        {portfolioData.map((data) => (
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
