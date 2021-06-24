import React, { useState } from "react";
import styles from "../style/experience-native.module.css";
import {jobs, ExperienceItem} from "../static/jobs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSwipeable } from "react-swipeable";
import SectionHeader from "./SectionHeader";
import {Fade} from "react-awesome-reveal";

type Direction = "forward" | "backward";

interface JobItemProps {
  item: ExperienceItem
  isActive: boolean
  nextJob: () => void
  prevJob: () => void
  direction: Direction
}

function JobItem(props: JobItemProps) {
  const {item, isActive, nextJob, prevJob, direction} = props;

  return (
    <div key={item.id} className={`${styles["experience-item"]} ${isActive ? styles["active"] : ""} ${styles[direction]}`}>
      <div className={`${styles["arrow"]} light-green`}
           onClick={prevJob}>❮</div>
      <div className={styles["experience-item-info"]}>
        <h3 className="light-green">{item.companyName}</h3>
        <span>{item.title}</span>
        <span>{item.time}</span>
        <ul className={styles["experience-item-points"]}>
        {item.bulletPoints.map(point => (
          <li>
            {point}
          </li>
        ))}
        </ul>
      </div>
      <div className={`${styles["arrow"]} light-green`}
           onClick={nextJob}>
        <div className={styles["arrow-holder"]}>
          ❯
        </div>
      </div>
    </div>
  )
}

interface JobSelectorItemProps {
  item: ExperienceItem
  activeItem: ExperienceItem
  setActiveItem: () => void
  setDirection: (direction: Direction) => void
  direction: Direction
}

function JobSelectorItem(props: JobSelectorItemProps) {
  const {item, setActiveItem, activeItem, setDirection, direction} = props;

  function handleClick() {
    if (item.id > activeItem.id) {
      setDirection("forward");
    } else {
      setDirection("backward");
    }

    setActiveItem();
  }

  return (
    <div key={item.id} className={`${styles["job-selector"]} ${activeItem.id === item.id ? styles["active"] : ""} ${styles[direction]}`}
         onClick={handleClick}>
    </div>
  )
}

export default function ExperienceNative() {
  const [activeItem, setActiveItem] = useState<ExperienceItem>(jobs[0]);
  const [direction, setDirection] = useState<Direction>("forward");

  const experienceSelectorItems = jobs.map(job => (
    <JobSelectorItem key={job.id}
                     item={job}
                     activeItem={activeItem}
                     setActiveItem={() => setActiveItem(job)}
                     setDirection={setDirection}
                     direction={direction} />
  ))

  function nextJob() {
    const index = jobs.indexOf(activeItem);
    setDirection("forward");
    if (index+2 > jobs.length) {
      setActiveItem(jobs[0]);
      return;
    }

    setActiveItem(jobs[index+1]);
  }

  function prevJob() {
    const index = jobs.indexOf(activeItem);
    setDirection("backward")
    if (index === 0) {
      setActiveItem(jobs[jobs.length-1]);
      return;
    }

    setActiveItem(jobs[index-1]);
  }

  const jobItems = jobs.map(job => (
    <JobItem key={job.id}
             item={job}
             isActive={job.id === activeItem.id}
             nextJob={nextJob}
             prevJob={prevJob}
             direction={direction} />
  ))

  const handlers = useSwipeable({
    onSwipedRight: () => prevJob(),
    onSwipedLeft: () => nextJob()
  })

  return (
    <div className={styles["experience-section"]}>
      <Fade direction="up" fraction={0.01} triggerOnce>
          <SectionHeader label="Experience" />
          <div className={styles["jobs"]} {...handlers}>
            <div className={styles["job-selectors"]}>
              {experienceSelectorItems}
            </div>
            <div className={styles["selected-job"]}>
              {jobItems}
            </div>
          </div>
      </Fade>
    </div>
  )
}