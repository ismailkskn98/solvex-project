import HeroIcon from "@/components/common/HeroIcon";
import { GlareCard } from "@/components/ui/glare-card";
import { GridBackground } from "@/components/ui/gridBackground";
import React from "react";

export default function ServiceCard({ title, content, icon }) {
  const Icon = icon;
  return (
    <GlareCard className="group relative z-0 flex w-full flex-col items-start justify-end bg-transparent text-white">
      <GridBackground className="pointer-events-none -z-20" />
      <Icon className="pointer-events-none absolute -top-16 left-1/2 -z-10 -translate-x-1/2 text-[350px] text-white/10 opacity-30" />
      <div className="pointer-events-none absolute inset-0 -z-[9] h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="pointer-events-none -z-[5] flex h-[275px] w-full flex-col items-start gap-2 bg-gradient-to-t from-black to-transparent px-8 pt-10 pb-3">
        <HeroIcon icon={icon} />
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-sm text-white/70">{content}</p>
      </div>
    </GlareCard>
  );
}
