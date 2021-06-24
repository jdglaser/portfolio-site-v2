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
      <Fade direction="up" fraction={0.001} triggerOnce>
        <a href={link} target="_blank">
          <div className={styles["project-item"]}>
            <h3 className={`${styles["project-item-header"]} light-green`}>{name}</h3>
            <span>{description}</span>
          </div>
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
    setToShow(toShow + 3);
    scroll.scrollMore(200, {duration: 0});
  }

  function showLess() {
    setToShow(3);
    window.location.replace("#projects");
  }

  const showButton = toShow <= projects.length ?
    (<button onClick={showMore}>Show more</button>) :
    (<button onClick={showLess}>Show less</button>)

  return (
    <div className={styles["projects-section"]}>
      <SectionHeader label="Projects" />
      <div className={styles["project-list"]}>
        {projectItems.slice(0,toShow)}
      </div>
      {showButton}
    </div>
  )
}