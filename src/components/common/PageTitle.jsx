import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { GridBackground } from "../ui/gridBackground";

export default function PageTitle({ title }) {
  return (
    <article className="relative mx-auto mt-8 flex w-full max-w-10/12 flex-col items-center rounded-lg px-10 py-14">
      <div className="w-min">
        <h1 className="relative z-20 text-3xl font-bold text-nowrap text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <GridBackground className="absolute inset-0 z-20 h-full w-full" />
        <div className="from-dark-black to-dark-black absolute inset-0 bg-gradient-to-t via-transparent"></div>
        <div className="from-dark-black to-dark-black absolute inset-0 bg-gradient-to-l via-transparent"></div>
        <div className="relative mt-3 h-8 w-full">
          <div className="absolute top-0 left-1/2 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute top-0 left-1/2 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute top-0 left-1/2 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
    </article>
  );
}
