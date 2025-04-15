import React from "react";

export function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black -z-10">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] :bg-black"></div>
    </div>
  );
}
