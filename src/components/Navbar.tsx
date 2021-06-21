import Hamburger from "hamburger-react";
import React, { useState } from "react"
import { Fade } from "react-awesome-reveal";
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
      <Fade direction="left">
        <div className="logo cool-font">
          <a href="../"><span className="light-green">JG</span></a>
        </div>
      </Fade>
      <div className="hamburger">
      <Fade direction="right">
          <Hamburger toggled={isMenuOpen} 
                     onToggle={isMenuOpen ? closeMenu : openMenu}
                     color="#5ED4BC"
                     size={26} />
      </Fade>
      </div>
      <NavMenu />
      </div>
    </>
  )
}