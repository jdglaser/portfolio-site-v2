import React from "react";
import styles from "../style/contact.module.css";
import SectionHeader from "./SectionHeader";
import githubImage from "../static/img/github.png";
import linkedInImage from "../static/img/linkedin_2.png";
import mailImage from "../static/img/mail.png";
import {Fade} from "react-awesome-reveal";

interface ContactIconProps {
  iconPath: string
  link: string
}

function ContactIcon(props: ContactIconProps) {
  const {iconPath, link} = props;

  return (
    <>
      <div className={styles["contact-icon"]}>
        <a className={styles["contact-link"]} href={link}>
          <img className={styles["contact-icon-image"]} src={iconPath}></img>
        </a>
      </div>
    </>
  )
}

export default function Contact() {
  return (
    <div className={styles["contact-section"]}>
      <Fade direction="up" triggerOnce fraction={0.15}>
        <SectionHeader label="Contact" />
        <div className={styles["contact-items"]}>
          <ContactIcon link="https://github.com/jdglaser"
                      iconPath={githubImage} />
          <ContactIcon link="mailto:jarred.glaser@gmail.com"
                      iconPath={mailImage} />
          <ContactIcon link="https://www.linkedin.com/in/jarred-glaser/"
                      iconPath={linkedInImage} />
        </div>
      </Fade>
    </div>
  )
}