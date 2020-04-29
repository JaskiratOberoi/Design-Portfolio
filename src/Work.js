import React, {Fragment} from "react";
// import {render} from "react-dom";

import {Timeline, Event} from "react-timeline-scribble";

export default function Work() {
  return (
    <div className="w-container">
      <Fragment>
        <Timeline>
          <Event
            interval={"This could be your company"}
            title={"?"}
            subtitle={""}
          ></Event>
          <Event
            interval={"July 2019 – April 2020"}
            title={"Hanu Software"}
            subtitle={"Cloud Engineer"}
          >
            <b>
              &#10687; Project 1 (Developing Data ETL Platform for future
              projects) - Client Company 1 [$18bn total revenue, 2017-2018]
            </b>
            • Deployed a new Data platform which, on completion, will save the
            company millions of dollars as they will have a proper system to
            onboard new data ETL and analysis projects along with a secure data
            governance, compliance and quality ruleset
            <br />• Developing Pipelines, Linked Services, Triggers, Datasets in
            Azure Data Factory
            <br />• Developing automated scripts for scaling of SQL Data
            Warehouse and Database Implementation of Azure Synapse Analytics
            Data modelling concepts, i.e., Fact and Dimensions etc
            <br />• Implementing Data ingestion from sources like flat files,
            Azure Data Lake Gen 2, APIs etc into Synapse Analytics
            <br />
            <b>
              &#10687; Project 2 (ETL of Sales Data) – Client Company 2 [$4.2bn
              total revenue, 2018-2019]
            </b>
            • Implementing Data ingestion from sources like flat files, On-Prem
            SQL Server etc. through Azure Data Factory into Azure Synapse
            Analytics
            <br />• Transformation of unstructured ingested data using python in
            Azure Databricks
            <br />• Support in developing BI reports using PowerBI
            <br />
            <b>
              &#10687; Project 3 (Chatbot) – Client Company 3 [$350M total
              revenue, 2018-2019]
            </b>
            • Implemented UX principles in the current design to enhance its
            functionality
            <br />• Created an interactive front-end prototype for the chatbot
            admin portal using Adobe XD tool
            <br />• Designed the complete front-end prototype from scratch using
            HTML5, Sass and JavaScript <br />
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
            • Core framework based on data mining using Jaccard’s Index
            implemented in Python <br />
            • Sample dataset imported from Kaggle
            <br />• Front-end UI of the windows application was developed using
            TKinter
          </Event>
        </Timeline>
      </Fragment>
    </div>
  );
}
