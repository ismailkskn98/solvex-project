import React from "react";

export default function HeroIcon({ icon: Icon, classNames }) {
  return (
    <div className={`icon-hexagon h-20 w-20 bg-white/10 p-1 ${classNames}`}>
      <div className="icon-hexagon flex h-full w-full items-center justify-center bg-white/15">
        <Icon className="text-[min(10vw,35px)] text-white transition-all duration-150" />
      </div>
    </div>
  );
}
