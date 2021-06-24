import React, { useState } from 'react'
import Delayed from './components/Delayed'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import ScreenOverlay from "./components/ScreenOverlay"
import logo from './logo.svg'
import './style/app.css'
import AboutMe from './components/AboutMe'
import { useCommonProps, useScrollBlock } from './hooks'
import ExperienceNative from './components/ExperienceNative'

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

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default App
