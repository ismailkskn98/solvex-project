"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
// import dynamic from "next/dynamic";

// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
// });

export default function ContactSpline() {
  return (
    <Spline
      scene="https://prod.spline.design/RnSc40iSiPMwViaa/scene.splinecode"
      className="before:bg-dark-black/10 absolute top-0 right-0 z-40 before:absolute before:right-0 before:bottom-0 before:h-[60px] before:w-[160px]"
    />
  );
}
