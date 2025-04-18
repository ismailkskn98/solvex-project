"use client";
import React, { useState } from "react";
import classNames from "classnames";
import Spline from "@splinetool/react-spline";

export default function ContactSpline() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Spline
      onLoad={() => setIsLoaded(true)}
      scene="https://prod.spline.design/RnSc40iSiPMwViaa/scene.splinecode"
      className={classNames(
        "before:bg-dark-black/10 absolute top-0 right-0 z-40 transition-opacity duration-700 ease-in-out before:absolute before:right-0 before:bottom-0 before:h-[60px] before:w-[160px]",
        {
          "opacity-100": isLoaded,
          "opacity-0": !isLoaded,
        },
      )}
    />
  );
}
