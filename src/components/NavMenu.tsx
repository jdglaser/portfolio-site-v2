import React, {useEffect, useState} from "react";
import {useCommonProps} from "../hooks";
import resumeUrl from "../static/resume_jarredglaser_04.pdf?url";

export default function NavMenu() {
  const [hideNoAnimation, setHideNoAnimation] = useState(false);

  const {isMenuOpen, openMenu, closeMenu} = useCommonProps();

  useEffect(() => {
    if (hideNoAnimation) {
      setHideNoAnimation(false);
    }
  }, [isMenuOpen])

  function handleClick() {
    setHideNoAnimation(true);
    closeMenu();
  }

  if (hideNoAnimation) {
    return null;
  }

  return (
    <>
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-menu-content cool-font">
          <a onClick={handleClick} href="#about-me" className="hover-animate">About</a>
          <a onClick={handleClick} href="#experience" className="hover-animate">Experience</a>
          <a onClick={handleClick} href="#projects" className="hover-animate">Projects</a>
          <a onClick={handleClick} href="#contact" className="hover-animate">Contact</a>
          <button onClick={handleClick}><a href={resumeUrl} target="_blank">Resume</a></button>
        </div>
      </div>
    </>
  )
}