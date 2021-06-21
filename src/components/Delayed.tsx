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
      console.log("Timeout done!");
      setHidden(false);
    }, waitForSeconds * 1000)
  })

  if (hidden) {
    return null;
  }

  console.log("Made it here!")
  return (
    <>
      {children}
    </>
  )
}