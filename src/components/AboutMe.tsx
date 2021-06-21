import React from "react";
import Fade from "react-reveal";
import SectionHeader from "./SectionHeader";
import me from "../img/me.jpeg";
import "../style/about-me.css";

interface SkillItemProp {
  label: string
}

function SkillItem(props: SkillItemProp) {
  const {label} = props;

  return (
    <div className="skill-item">
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

const skillItems = skills.map(skill => (<SkillItem label={skill} />))

export default function AboutMe() {
  return (
    <>
      <Fade bottom>
      <SectionHeader label="About Me" />
        <div className="about-me">
          <div className="about-me-text dark-grey">
              Hello! I'm Jarred, and I love building things with code. 
              <br /><br />
              I began my career in tech working in analytics and data engineering where I learned to wrangle data and gather
              insights from it.
              <br /><br />
              Today, I work as a full stack software engineer.
              I love seeing a product come together end-to-end and using all of the 
              various technologies and tools at my disposal to solve unique and interesting problems. I also volunteer
              part-time as a high school computer science teacher through 
              the <a href="https://www.microsoft.com/en-us/teals" className="hover-animate light-green" target="_blank">Microsoft TEALS</a> program.
          </div>
          <div className="pic-holder">
            <img className="me" src={me}></img>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div>
          Here are some things I know...
          <div className="skills-list">
            {skillItems}
          </div>
        </div>
      </Fade>
    </>
  )
}