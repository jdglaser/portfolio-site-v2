import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import styles from "../style/experience-desktop.module.css";
import {jobs, ExperienceItem} from "../static/jobs";


interface ExperienceListItemProps {
  item: ExperienceItem
  setActiveItem: (item: ExperienceItem) => void
  isActive: boolean
}

function ExperienceListItem(props: ExperienceListItemProps) {
  const {item, setActiveItem, isActive} = props;

  return (
    <div className={`${styles["experience-item"]} ${isActive ? styles["active"] : ""}`}
         onClick={() => setActiveItem(item)}>
      <div className={styles["experience-item-active-border"]} />
      {item.companyName}
    </div>
  )
}

export default function Experience() {
  const [activeItem, setActiveItem] = useState<ExperienceItem>(jobs[0])
  return (
    <div className={styles["experience-section"]}>
        <div className={styles["experience-navigator"]}>
            {jobs.map(item => (
              <ExperienceListItem item={item} 
                                  setActiveItem={setActiveItem}
                                  isActive={item.id === activeItem.id} />))}
        </div>
    </div>
  )
}