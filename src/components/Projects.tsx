import React, { useState } from "react";
import { Project, projects } from "../static/projects";
import styles from "../style/projects.module.css";
import SectionHeader from "./SectionHeader";
import {Fade} from "react-awesome-reveal"
import {animateScroll as scroll} from "react-scroll";

interface ProjectItemProps {
  project: Project
}

function ProjectItem(props: ProjectItemProps) {
  const {project} = props;

  const {name, description, link} = project;

  return (
    <>
      <Fade direction="up" fraction={0.15} triggerOnce>
        <a href={link}>
          <div className={styles["project-item"]}>
            <h3 className={`${styles["project-item-header"]} light-green`}>{name}</h3>
            <span>{description}</span>
          </div>
          <a id={`projects-${name}`} />
        </a>
      </Fade>
    </>
  )
}

export default function Projects() {
  const [toShow, setToShow] = useState(3);

  const projectItems = projects.map(project => (
    <ProjectItem key={project.name}
                 project={project} />
  ));

  function showMore() {
    const newToShow = (toShow + 3) > projects.length ? projects.length : toShow + 3;
    setToShow(newToShow);
    const lastElementName = projects[toShow-1].name;
    document.getElementById(`projects-${lastElementName}`)?.scrollIntoView(true);
  }

  function showLess() {
    setToShow(3);
    document.getElementById("projects")?.scrollIntoView(true);
  }

  const showButton = toShow < projects.length ?
    (<button onClick={showMore}>Show more</button>) :
    (<button onClick={showLess}>Show less</button>)

  return (
    <div className={styles["projects-section"]}>
      <Fade direction="up" triggerOnce fraction={0.15}>
        <SectionHeader label="Projects" />
        <div className={styles["project-content"]}>
          <div className={styles["project-list"]}>
            {projectItems.slice(0,toShow)}
          </div>
          {showButton}
        </div>
      </Fade>
    </div>
  )
}