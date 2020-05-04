import React from "react";
import Section from "./Skills/Section";

import figma_logo from "./media/logos/svg/Figma.svg";
import wf_logo from "./media/logos/svg/wireframe.svg";
import ui_logo from "./media/logos/svg/ui.svg";
import map_logo from "./media/logos/svg/map.svg";
import uxwriting_logo from "./media/logos/svg/uxwriting.svg";

import html_logo from "./media/logos/svg/icons8-html-5.svg";
import css_logo from "./media/logos/svg/icons8-css3.svg";
import flexbox_logo from "./media/logos/svg/022-website.svg";
import grid_logo from "./media/logos/svg/040-website.svg";
import js_logo from "./media/logos/svg/icons8-javascript.svg";
import react_logo from "./media/logos/svg/icons8-react-native.svg";
import scss_logo from "./media/logos/svg/sass.svg";

import python_logo from "./media/logos/svg/icons8-python.svg";
import sql_logo from "./media/logos/svg/sql.svg";
import flask_logo from "./media/logos/svg/flask.svg";

import code_logo from "./media/logos/svg/033-vscode.svg";
import github_logo from "./media/logos/svg/github.svg";
import git_logo from "./media/logos/svg/git-icon.svg";
import photoshop_logo from "./media/logos/svg/icons8-adobe-photoshop.svg";
import xd_logo from "./media/logos/svg/icons8-adobe-xd.svg";
// import explorer_logo from "./media/logos/svg/Storage Explorer.svg";

import adf_logo from "./media/logos/svg/Data Factories.svg";
import adls_logo from "./media/logos/svg/Data Lake Storage.svg";
import databricks_logo from "./media/logos/svg/Azure Databricks.svg";
import app_logo from "./media/logos/svg/App Services.svg";
import db_logo from "./media/logos/svg/SQL Databases.svg";
import az_logo from "./media/logos/svg/All Resources.svg";

export default function Skills() {
  const uiuxDesigner = {
    title: "UI/UX Designer",
    skills: [
      {
        title: "UI Prototyping",
        logo: ui_logo,
      },
      {
        title: "Site Mapping",
        logo: map_logo,
      },
      {
        title: "Wireframes",
        logo: wf_logo,
      },
      {
        title: "UX Writing",
        logo: uxwriting_logo,
      },
    ],
  };
  const frontendEngineer = {
    title: "Frontend Engineer",
    skills: [
      {
        title: "HTML 5",
        logo: html_logo,
      },
      {
        title: "CSS 3",
        logo: css_logo,
      },
      {
        title: "Flexbox",
        logo: flexbox_logo,
      },
      {
        title: "CSS Grid",
        logo: grid_logo,
      },
      {
        title: "Sass/Scss",
        logo: scss_logo,
      },
      {
        title: "JavaScript",
        logo: js_logo,
      },
      {
        title: "React JS",
        logo: react_logo,
      },
    ],
  };

  const backendEngineer = {
    title: "Backend Engineer",
    skills: [
      {
        title: "Python 3",
        logo: python_logo,
      },
      {
        title: "Flask",
        logo: flask_logo,
      },
      {
        title: "SQL Server",
        logo: sql_logo,
      },
    ],
  };

  const tools = {
    title: "Professional Tools",
    skills: [
      {
        title: "VS Code",
        logo: code_logo,
      },
      {
        title: "Github",
        logo: github_logo,
      },
      {
        title: "Git",
        logo: git_logo,
      },
      {
        title: "Adobe Photoshop",
        logo: photoshop_logo,
      },
      {
        title: "Adobe XD",
        logo: xd_logo,
      },
      {
        title: "Figma",
        logo: figma_logo,
      },
    ],
  };

  const cloudEngineer = {
    title: "Cloud Engineer (MS Azure)",
    skills: [
      {
        title: "SQL Services",
        logo: db_logo,
      },
      {
        title: "Data Factory",
        logo: adf_logo,
      },
      {
        title: "Databricks",
        logo: databricks_logo,
      },
      {
        title: "App Service",
        logo: app_logo,
      },
      {
        title: "ADLS Gen2",
        logo: adls_logo,
      },
      {
        title: "Other Services",
        logo: az_logo,
      },
    ],
  };

  return (
    <div className="s-main">
      <Section title={uiuxDesigner.title} skills={uiuxDesigner.skills} />
      <Section
        title={frontendEngineer.title}
        skills={frontendEngineer.skills}
      />
      <Section title={backendEngineer.title} skills={backendEngineer.skills} />
      <Section title={cloudEngineer.title} skills={cloudEngineer.skills} />
      <Section title={tools.title} skills={tools.skills} />
    </div>
  );
}
