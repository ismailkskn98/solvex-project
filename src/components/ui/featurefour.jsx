"use client";
import { cn } from "@/lib/utils";

//TODO : Improve mobile version to display the image down the corresponding text instead of at the full bottom

export function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border transition-all",
        isOpen
          ? "border-2 border-white/15 bg-white/5"
          : "scale-90 border-transparent opacity-50 saturate-0",
      )}
    >
      <div className="flex w-full items-center gap-3 p-3">
        <p
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white",
          )}
        >
          {number}
        </p>
        <h2 className={cn("text-left text-base font-medium text-white")}>
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-white/70 transition-all duration-500",
          isOpen ? "max-h-64" : "max-h-0",
        )}
      >
        <p className="p-4 text-sm">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className={cn("absolute top-0 left-0 h-1 bg-neutral-500")}
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
