import React, {Fragment} from "react";
// import {render} from "react-dom";

import {Timeline, Event} from "react-timeline-scribble";

export default function Work() {
  return (
    <div className="w-container">
      <Fragment>
        {/* <h1>One learn's best on the Job!</h1> */}
        <Timeline>
          <Event
            interval={"This could be your company"}
            title={"?"}
            subtitle={""}
          ></Event>
          <Event
            interval={"July 2019 – May 2020"}
            title={"Hanu Software"}
            subtitle={"Cloud Engineer"}
          >
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Event>
          <Event
            interval={"May 2018 – July 2018"}
            title={"AT&T"}
            subtitle={"Project Based Summer Internship"}
          >
            Stack Overflow Question Recommender (Data Mining Project): <br />
            Developed desktop app that is a Question Recommender for Stack
            Overflow:
            <br />
            &#10687; Core framework based on data mining using Jaccard’s Index
            implemented in Python <br />
            &#10687; Sample dataset imported from Kaggle
            <br />
            &#10687; Front-end UI of the windows application was developed using
            TKinter
          </Event>
        </Timeline>
      </Fragment>
    </div>
  );
}
