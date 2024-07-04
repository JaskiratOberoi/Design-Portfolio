import React from "react";

function Endorsement(props) {
  const navigate = () =>
    window.open(
      "https://www.linkedin.com/in/jaskiratoberoi/#recommendations",
      "_blank"
    );

  return (
    <div className="endorsement" onClick={navigate}>
      <div className="e-title">{props.title}</div>
      <div className="e-body">{props.body}</div>
      <div className="e-source">{props.source}</div>
    </div>
  );
}

export default Endorsement;
