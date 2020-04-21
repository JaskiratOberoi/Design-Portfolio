import React from "react";
// import $ from "jquery";
// import jaskirat1 from "./media/jaskirat-1.JPG";
import jaskirat2 from "./media/jaskirat-2.jpg";
// import jaskirat3 from "./media/jaskirat-3.jpg";
// import jaskirat4 from "./media/jaskirat-4.jpg";
// import jaskirat5 from "./media/jaskirat-7.png";
// import jaskirat6 from "./media/jaskirat-8.png";

export default function Flow() {
  return (
    <div className="f-main">
      <div className="f-image">
        <div id="slideshow">
          {/* <div>
            <img src={jaskirat1} alt=" me-1" />
          </div>
          <div>
            <img src={jaskirat6} alt="me-2" />
          </div>
          <div>
            <img src={jaskirat3} alt="me-3" />
          </div>
          <div>
            <img src={jaskirat4} alt="me-4" />
          </div>
          <div>
            <img src={jaskirat5} alt="me-5" />
          </div> */}
          <div>
            <img src={jaskirat2} alt="me-6" />
          </div>
        </div>
      </div>

      <div className="f-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vitae
        labore fugiat obcaecati in eius veniam, architecto asperiores, eveniet,
        nisi fuga aliquam corporis necessitatibus esse commodi! Itaque officiis
        iusto necessitatibus.
      </div>
    </div>
  );
}
