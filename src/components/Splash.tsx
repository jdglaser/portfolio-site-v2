import React from "react";
import {Fade} from "react-awesome-reveal";
import "../style/splash.css";
import Delayed from "./Delayed";

export default function Splash() {
  return (
    <>
      <div className="header">
        <Delayed waitForSeconds={0.8}>
          <Fade direction="left" cascade triggerOnce>
            <div className="header-description">
              <span className="light-green cool-font">Hello, my name is</span>
              <h1 className="light-green">Jarred Glaser</h1>
              <span>I'm a Milwaukee-based software engineer. I enjoy building solutions and solving challenging problems.
                I currently work as a lead software engineer at <a href="https://www.northwesternmutual.com/" className="light-green hover-animate">Northwestern Mutual</a>.</span>
            </div>
            <div>
              <a href="mailto:jarred.glaser@gmail.com">
                <button>Contact</button>
              </a>
            </div>
          </Fade>
        </Delayed>
      </div>
    </>
  )
}