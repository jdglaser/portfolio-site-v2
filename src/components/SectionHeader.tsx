import React from "react";
import "../style/section-header.css"

interface SectionHeaderProps {
  label: string
  style?: React.CSSProperties
}

export default function SectionHeader(props: SectionHeaderProps) {
  const {label, style} = props;

  return (
    <> 
      <div className="section-header" style={style}>
        <div className="section-header-label cool-font light-grey">
          {label}
        </div>
        <div className="section-header-line"></div>
      </div>
    </>
  )
}