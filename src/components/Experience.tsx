import React, { useEffect, useState } from "react";
import ExperienceDesktop from "./ExperienceDesktop";
import ExperienceNative from "./ExperienceNative";
import SectionHeader from "./SectionHeader";
import "../style/experience.css";

export default function Experience() {
  const [isDesktop, setDesktop] = useState<boolean>(window.innerWidth > 600);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="experience-section">
      <SectionHeader label="Experience" />
      {isDesktop ? (
        <ExperienceNative />
        ) : (
         <ExperienceNative />
         )
      }
    </div>
  )
}