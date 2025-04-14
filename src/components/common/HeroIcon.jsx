import React from "react";

export default function HeroIcon({ icon: Icon, classNames }) {
  return (
    <div className={`absolute w-28 h-28 icon-hexagon p-1 bg-white/10 ${classNames}`}>
      <div className="w-full h-full flex items-center justify-center icon-hexagon bg-white/15">
        <Icon className="text-white text-[min(10vw,60px)]" />
      </div>
    </div>
  );
}
