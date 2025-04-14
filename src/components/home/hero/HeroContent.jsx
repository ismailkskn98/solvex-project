import React from "react";

export default function HeroContent() {
  return (
    <article className="relative flex flex-col items-center justify-center gap-3 z-50 w-full max-w-[1300px]">
      <div className="flex flex-col items-center justify-center text-center text-transparent bg-gradient-to-l from-lavender-light to-white bg-clip-text">
        <h1 className="font-black text-[min(10vw,50px)]">SolvexNetwork</h1>
        <p className="text-[min(10vw,30px)] font-medium">We provide innovative products that eliminate the complexity in blockchain technology, allowing society to benefit without requiring technical knowledge.</p>
      </div>
      <p className="text-center text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolor quo. Aspernatur, eos aliquam. Odit, et.</p>
      <div className="flex items-center gap-4 mt-2 capitalize font-bold">
        <button className="px-5 py-3 rounded-full bg-white/15 border-2 border-white/20 text-white cursor-pointer hover:bg-white/30 transition">Get Started</button>
        <button className="px-5 py-3 rounded-full bg-white cursor-pointer text-black/80 hover:bg-white/70 transition">Satın Al</button>
      </div>
    </article>
  );
}
