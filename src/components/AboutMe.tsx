import React from "react";
import { Fade } from "react-awesome-reveal";
import me from "../static/img/me.jpeg";
import "../style/about-me.css";
import SectionHeader from "./SectionHeader";

interface SkillItemProp {
  label: string
}

function SkillItem(props: SkillItemProp) {
  const {label} = props;

  return (
    <div key={label} className="skill-item">
      <span className="light-green" style={{fontSize: "8pt"}}>► </span>
      <span className="light-grey">{label}</span>
    </div>
  )
}

const skills = [
  "Java",
  "Python",
  "Javascript",
  "HTML5/CSS",
  "SQL",
  "Git & CI/CD",
  "AWS & Terraform",
  "Agile Software Engineering",
  "Data Engineering",
  "Power BI & Tableau",
  "Machine Learning & Statistics"
]

const skillItems = skills.map(skill => (<SkillItem key={skill} label={skill} />))

export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <Fade direction="up" triggerOnce fraction={0.15}>
          <div>
            <SectionHeader label="About Me" />
          </div>
          <div className="about-me-top-container">
            <div className="about-me-text dark-grey">
                Hello! I'm Jarred, and I love building things with code. 
                <br /><br />
                I began my career in tech working in analytics and data engineering where I learned to wrangle data and gather
                insights from it.
                <br /><br />
                Today, I work as a senior software engineer.
                I love using all of the various technologies and tools at 
                my disposal to solve unique and interesting problems.
            </div>
            <div className="pic-holder">
              <img className="me" src={me}></img>
            </div>
          </div>
          <div>Here are some things I know...</div>
        </Fade>
        <div className="skills-list">
          <Fade direction="left" fraction={0.15} duration={250} cascade triggerOnce>
            {skillItems}
          </Fade>
        </div>
      </div>
    </>
  )
}