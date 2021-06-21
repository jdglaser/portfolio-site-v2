import React from "react";
import { useCommonProps } from "../hooks";

export default function ScreenOverlay() {
  const {screenDisabled, closeMenu} = useCommonProps();

  return (
    <div onClick={closeMenu} className={`screen-overlay${screenDisabled ? "" : " hidden"}`}></div>
  )
}