import HeroIcon from "@/components/common/HeroIcon";
import { GlareCard } from "@/components/ui/glare-card";
import { GridBackground } from "@/components/ui/gridBackground";
import React from "react";

export default function ServiceCard({ title, content, icon }) {
  return (
    <article className="group">
      <GlareCard className="relative flex w-full flex-col items-start justify-end bg-transparent text-white">
        <GridBackground />
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
        <div className="flex h-[310px] w-full flex-col items-start gap-2 bg-gradient-to-t from-black to-transparent px-8 py-10">
          <HeroIcon icon={icon} />
          <h4 className="font-medium text-white">{title}</h4>
          <p className="text-white/70">{content}</p>
        </div>
      </GlareCard>
    </article>
  );
}
