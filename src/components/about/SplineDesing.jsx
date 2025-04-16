"use client";
import React from "react";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  srr: false,
});

export default function SplineDesing() {
  return (
    <Spline
      scene="https://prod.spline.design/KjsOdZmZbQxRL1-z/scene.splinecode"
      className="before:bg-dark-black absolute top-0 right-0 z-40 before:absolute before:right-0 before:bottom-0 before:h-[70px] before:w-[180px]"
    />
  );
}
