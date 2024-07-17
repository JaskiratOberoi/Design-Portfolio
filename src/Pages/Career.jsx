import React, { Fragment } from "react";

import { Timeline, Event } from "react-timeline-scribble";

export default function Work() {
  return (
    <div className="w-container">
      <Fragment>
        <Timeline>
          <Event
            interval={"March 2021 - Present"}
            title={"Amazon"}
            subtitle={"Design Technologist"}
          >
            <span className="w-dt-title">
              Proud to hold the title of "Amazon India's First ever Design
              Technologist"
            </span>
            <span className="w-dt-details">
              As Amazon India's pioneering Design Technologist, I spearheaded a
              streamlined design-to-development workflow. By meticulously
              overseeing each project phase, I ensured designs were
              code-feasible, suggesting alternatives when needed. On the
              development end I upheld strict adherence to design guidelines,
              personally implementing complex elements when necessary. This
              proactive approach significantly reduced roadblocks, boosting
              productivity across the Design-Development process. The success of
              this model led to its adoption across Amazon Business, elevating
              the overall workflow and quality standards. Collaborated with
              cross-functional teams of 20+ developers and 10+ UX designers in
              my tenure, bridging the gap between UX Design and Frontend
              Development.
            </span>
            <p></p>
            <ul className="w-details-list">
              <li>
                Built multiple interactive prototypes to test and refine design
                concepts
              </li>
              <li>
                Implement front-end development using HTML, CSS, and JavaScript
              </li>
              <li>
                Contributed to the Internal Design System by building components
                in React TypeScript
              </li>
              <li>
                Ensured highest standards for the Design System by implementing
                Unit Tests & UI Tests
              </li>
              <li>
                Collaborated with cross-functional teams to bridge design and
                development
              </li>
              <li>
                Translated design requirements into technical specifications
                during design hand-offs
              </li>
              <li>
                Conducted user research and testing to evaluate usability
                alongside UX researchers
              </li>
              <li>Analyzed user feedback to iterate on design solutions</li>
              <li>
                Keeping up with emerging technologies and design trends in order
                to enhance UX/developer workflow
              </li>
              <li>Ensured feasibility and implementation of design concepts</li>
              <li>
                Communicated technical constraints to designers effectively
              </li>
              <li>
                Prioritized user experience in all aspects of product
                development
              </li>
            </ul>
          </Event>
          <Event
            interval={"July 2020 - March 2021"}
            title={"Amazon"}
            subtitle={"Support Engineer III "}
          >
            <br />• Implementing Data ingestion pipelines from sources like flat
            files, On-Prem SQL Server etc. into Data warehouses
            <br />• Supporting clients directly in report generation activities
            using SQL and Python
            <br />• Deploying automation scripts for report delivery to clients
            <br />• Transformation of unstructured ingested data using python
            with internal tools
            <br />• Support in developing BI reports using PowerBI
          </Event>
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
            <b>
              &#10687; Stack Overflow Question Recommender (Data Mining
              Project):{" "}
            </b>
            <br />
            • Developed desktop app that is a Question Recommender for Stack
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
