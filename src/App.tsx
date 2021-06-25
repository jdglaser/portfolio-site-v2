import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import ScreenOverlay from "./components/ScreenOverlay"
import './style/app.css'
import AboutMe from './components/AboutMe'
import { useCommonProps, useScrollBlock } from './hooks'
import ExperienceNative from './components/ExperienceNative'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  console.log("here")

  const {screenDisabled} = useCommonProps();
  const {allowScroll, blockScroll} = useScrollBlock();

  if (screenDisabled) {
    blockScroll();
  } else {
    allowScroll();
  }

  return (
    <div className="app">
      <ScreenOverlay />
      <Navbar />
      <div className="content">
        <Splash />

        <a id="about-me" className="anchor" />
        <AboutMe />

        <a id="experience" className="anchor" />
        <ExperienceNative />

        <a id="projects" className="anchor" />
        <Projects />

        <a id="contact" className="anchor" />
        <Contact />

        <div className="footer">
          <span>
            Website created by Jarred Glaser.
          </span>
          <span>
            Checkout the code <a href="https://github.com/jdglaser/portfolio-site-v2"
                    className="light-green">here</a>.
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
