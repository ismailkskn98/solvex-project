"use client";
import React from "react";
import { useEffect, useState } from "react";
import { TextComponent } from "@/components/ui/featurefour";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ColdWalletContent({ data }) {
  const [featureOpen, setFeatureOpen] = useState(0);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-6">
        {data.map((item, index) => (
          <button
            className="w-full"
            key={item.title}
            onClick={() => {
              setFeatureOpen(index);
              setTimer(0);
            }}
            type="button"
          >
            <TextComponent
              content={item.content}
              isOpen={featureOpen === index}
              loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
              number={index + 1}
              title={item.title}
            />
          </button>
        ))}
      </div>
      <div className="h-full">
        <div
          className={cn(
            "relative h-96 w-full overflow-hidden rounded-lg border-2 border-white/15 drop-shadow-[0_0_10px_#2f2f4e] md:h-[500px]",
          )}
        >
          {data.map((item, index) => (
            <Image
              alt={item.title}
              width={900}
              height={500}
              className={cn(
                "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                featureOpen === index ? "scale-100" : "scale-70",
                featureOpen > index ? "translate-y-full" : "",
              )}
              key={item.title}
              src={item.srcImage}
              style={{ zIndex: data.length - index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
