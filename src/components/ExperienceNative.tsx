import React, { useState } from "react";
import styles from "../style/experience-native.module.css";
import {jobs, ExperienceItem} from "../static/jobs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSwipeable } from "react-swipeable";

interface JobItemProps {
  item: ExperienceItem
  isActive: boolean
  nextJob: () => void
  prevJob: () => void
}

function JobItem(props: JobItemProps) {
  const {item, isActive, nextJob, prevJob} = props;

  return (
    <div key={item.id} className={`${styles["experience-item"]} ${isActive ? styles["active"] : ""}`}>
      <div className={`${styles["arrow"]} light-green`}
           onClick={prevJob}>❮</div>
      <div className={styles["experience-item-info"]}>
        {item.companyName}<br />
        {item.title}<br />
        {item.time}<br />
        <ul>
        {item.bulletPoints.map(point => (
          <li>
            {point}
          </li>
        ))}
        </ul>
      </div>
      <div className={`${styles["arrow"]} light-green`}
           onClick={nextJob}>❯</div>
    </div>
  )
}

interface JobSelectorItemProps {
  item: ExperienceItem
  setActiveItem: (job) => void
  isActive: boolean
}

function JobSelectorItem(props: JobSelectorItemProps) {
  const {item, setActiveItem, isActive} = props;

  return (
    <div key={item.id} className={`${styles["job-selector"]} ${isActive ? styles["active"] : ""}`}
         onClick={() => setActiveItem(item)}>
    </div>
  )
}

export default function ExperienceNative() {
  const [activeItem, setActiveItem] = useState<ExperienceItem>(jobs[1]);

  const experienceSelectorItems = jobs.map(job => (
    <JobSelectorItem key={job.id}
                     item={job}
                     setActiveItem={(job) => setActiveItem(job)}
                     isActive={job.id === activeItem.id} />
  ))

  function nextJob() {
    const index = jobs.indexOf(activeItem);
    if (index+2 > jobs.length) {
      setActiveItem(jobs[0]);
      return;
    }

    setActiveItem(jobs[index+1]);
  }

  function prevJob() {
    const index = jobs.indexOf(activeItem);
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
             prevJob={prevJob} />
  ))

  const handlers = useSwipeable({
    onSwipedRight: () => prevJob(),
    onSwipedLeft: () => nextJob()
  })

  return (
    <div className={styles["jobs"]} {...handlers}>
      <div className={styles["job-selectors"]}>
        {experienceSelectorItems}
      </div>
      <div className={styles["selected-job"]}>
        {jobItems}
      </div>
    </div>
  )
}