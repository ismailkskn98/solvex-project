import React from "react";

export default function HeroContent() {
  return (
    <article className="relative z-50 flex w-full max-w-[1300px] flex-col items-center justify-center gap-3">
      <div className="from-lavender-light flex flex-col items-center justify-center bg-gradient-to-l to-white bg-clip-text text-center text-transparent">
        <h1 className="text-[min(10vw,50px)] font-black">SolvexNetwork</h1>
        <p className="text-[min(10vw,30px)] font-medium">
          We provide innovative products that eliminate the complexity in
          blockchain technology, allowing society to benefit without requiring
          technical knowledge.
        </p>
      </div>
      <p className="text-center text-white/60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolor quo.
        Aspernatur, eos aliquam. Odit, et.
      </p>
      <div className="mt-2 flex items-center gap-4 font-bold capitalize">
        <button className="cursor-pointer rounded-full border-2 border-white/20 bg-white/15 px-5 py-3 text-white transition hover:bg-white/30">
          Get Started
        </button>
        <button className="cursor-pointer rounded-full bg-white px-5 py-3 text-black/80 transition hover:bg-white/70">
          Satın Al
        </button>
      </div>
    </article>
  );
}
