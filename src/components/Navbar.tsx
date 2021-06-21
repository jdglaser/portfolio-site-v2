import Hamburger from "hamburger-react";
import React, { useState } from "react"
import Fade from "react-reveal/Fade";
import { useCommonProps } from "../hooks";
import NavMenu from "./NavMenu";
import "../style/navbar.css";

export default function Navbar() {
  const {closeMenu, openMenu, isMenuOpen} = useCommonProps();

  /*
  const handleClick = () => {
    setShowMenu(!showMenu);
    setScreenDisabled(!screenDisabled);
  }*/

  return (
    <>
      <div className="blank-space"></div>
      <div className="navbar">
      {isMenuOpen ? (
        <div className="navbar-overlay"></div>
      ) : <></>}
      <Fade left>
        <div className="logo cool-font">
          <a href="../"><span className="light-green">JG</span></a>
        </div>
      </Fade>
      <Fade right>
        <div className="hamburger">
          <Hamburger toggled={isMenuOpen} 
                     onToggle={isMenuOpen ? closeMenu : openMenu}
                     color="#5ED4BC"
                     size={26}/>
        </div>
      </Fade>
      <NavMenu />
      </div>
    </>
  )
}