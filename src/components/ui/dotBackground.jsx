import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-30">
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)] backdrop-blur-md" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
