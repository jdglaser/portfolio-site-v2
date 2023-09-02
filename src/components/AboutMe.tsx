import React from "react";
import {Fade} from "react-awesome-reveal";
import me from "../static/img/me.jpeg";
import "../style/about-me.css";
import SectionHeader from "./SectionHeader";

interface SkillItemProp {
  label: string
  skills: string[]
}

function SkillItem(props: SkillItemProp) {
  const {label, skills} = props;

  const skillList = skills.map(skill => (
    <li key={skill}>
      <span className="light-grey">{skill}</span>
    </li>
  ))

  return (
    <div key={label} className="skill-item">
      <div>
        <div className="light-grey">{label}</div>
      </div>
      <div>
        <div className="section-header-line"></div>
      </div>
      <ul>
        {skillList}
      </ul>
    </div>
  )
}

const skills: SkillItemProp[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "HTML", "CSS", "Rust"]
  },
  {
    label: "Frameworks",
    skills: ["FastAPI", "Starlette", "Flask", "Spring", "Node", "React"]
  },
  {
    label: "Tools",
    skills: ["Git", "GitLab CI/CD", "Docker", "Terraform", "Flyway", "Kubernetes", "AWS (EKS, S3, Lambda, API Gateway)", "Kafka", "Jira"]
  },
  {
    label: "Databases & Analytics",
    skills: ["PostgreSQL", "MS SQL Server", "AWS Redshift", "Snowflake", "DBT", "Power BI", "Tableau"]
  },
  {
    label: "Software Development",
    skills: ["Agile", "Full Stack Development", "Microservices", "Data Engineering", "Data Pipelines"]
  }
]

const skillItems = skills.map(({label, skills}) => (<SkillItem label={label} skills={skills} />))

export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <Fade direction="up" triggerOnce fraction={0.15}>
          <div>
            <SectionHeader label="About Me" />
          </div>
          <div className="about-me-top-container">
            <div className="about-me-text light-grey">
              Hello! I'm Jarred, and I love building things with code.
              < br /> <br />
              I began my career in tech working in analytics and data engineering where I learned to wrangle data and gather
              insights from it.
              < br /> <br />
              Today, I work as a full stack software engineer.
              I love using all of the various technologies and tools at
              my disposal to solve unique and interesting problems.
            </div >
            <div className="pic-holder">
              <img className="me" src={me}></img>
            </div>
          </div >
          <div>Here are some things I know...</div>
          <div className="skills-section">
            {skillItems}
          </div>
        </Fade >
      </div >
    </>
  )
}