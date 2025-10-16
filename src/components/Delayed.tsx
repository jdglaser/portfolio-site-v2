import React, { useEffect, useState } from "react";

interface DelayedProps {
  waitForSeconds: number
  children?: React.ReactNode
}

export default function Delayed(props: DelayedProps) {
  const {waitForSeconds, children} = props;

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, waitForSeconds * 1000)
  })

  if (hidden) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}