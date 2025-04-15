import HeroIcon from "@/components/common/HeroIcon";
import { GlareCard } from "@/components/ui/glare-card";
import { GridBackground } from "@/components/ui/gridBackground";
import React from "react";

export default function ServiceCard({ title, content, icon }) {
  return (
    <article className="group">
      <GlareCard className="relative w-full flex flex-col items-start justify-end text-white bg-transparent ">
        <GridBackground />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent -z-10"></div>
        <div className="w-full flex flex-col items-start gap-2 bg-gradient-to-t from-black to-transparent px-8 py-10 h-[310px]">
          <HeroIcon icon={icon} />
          <h4 className="font-medium text-white">{title}</h4>
          <p className="text-white/70">{content}</p>
        </div>
      </GlareCard>
    </article>
  );
}
