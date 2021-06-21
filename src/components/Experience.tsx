import React from "react";
import SectionHeader from "./SectionHeader";

interface ExperienceItem {
  companyName: string
  time: string
  jobTitle: string
  bulletPoints: string[]
}

const experienceItems: ExperienceItem[] = [
  {
    companyName: "Northwestern Mutual",
    time: "Aug 2020 - Present",
    jobTitle: "Software Engineer",
    bulletPoints: [
      "Created stuff",
      "Wrote code",
      "Had fun"
    ]
  }
]

interface ExperienceListItemProps {
  item: ExperienceItem
  setActiveItem: (item: ExperienceItem) => void
}

function ExperienceListItem(props: ExperienceListItemProps) {
  const {item, setActiveItem} = props;


}

export default function Experience() {
  return (
    <>
      <SectionHeader label="Experience" />
      <div className="experience">
        <div className="experience-navigator">

        </div>
      </div>
    </>
  )
}