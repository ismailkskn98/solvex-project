"use client";
import React, { useState } from "react";
import classNames from "classnames";
import Spline from "@splinetool/react-spline";

export default function SplineDesing() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      <Spline
        scene="https://prod.spline.design/jqxdPs1Pvkw2femA/scene.splinecode"
        onLoad={() => setIsLoaded(true)}
        className={classNames(
          "before:bg-dark-black absolute top-0 right-0 z-40 transition-opacity duration-700 ease-in-out before:absolute before:right-0 before:bottom-0 before:h-[60px] before:w-[160px]",
          {
            "opacity-100": isLoaded,
            "opacity-0": !isLoaded,
          },
        )}
      />
    </div>
  );
}
