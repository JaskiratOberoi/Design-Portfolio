import React from "react";

const ProjectCard = (props) => {

  const gotoLink = () => window.open(
    props.url,
    '_blank'
   );
  return (
    // <a href={props.url} target="_blank" rel="noopener noreferrer" className={props.featured ? "featured-card": null}>
      <div className="project-card" onClick={gotoLink}>
        <div className="p-image">
          <img src={props.bannerSrc} alt="project_image"></img>
        </div>
        <h1 className="p-title">{props.title}</h1>
        <div className="p-details">
          { props.designDetails ? <> <span>Design:</span> { props.designDetails } <br /> </>: null}
          { props.devDetails? <> <span>Dev:</span> { props.devDetails } </> :null }
        </div>
      </div>
    // </a>
  );
};

export default ProjectCard;