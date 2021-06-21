import React, { useState } from 'react'
import Delayed from './components/Delayed'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import ScreenOverlay from "./components/ScreenOverlay"
import logo from './logo.svg'
import './style/app.css'
import Fade from "react-reveal"
import AboutMe from './components/AboutMe'
import { useCommonProps, useScrollBlock } from './hooks'

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
        <div className="splash-holder">
          <Delayed waitForSeconds={0.8}>
            <Splash />
          </Delayed>
        </div>

        <a id="about-me" className="anchor" />
        <AboutMe />
      </div>
    </div>
  )
}

export default App
