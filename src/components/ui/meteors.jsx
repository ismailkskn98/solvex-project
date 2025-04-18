"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Meteors = ({ number, className }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const count = number || 20;
      const styles = new Array(count).fill(true).map((_, idx) => {
        const meteorCount = count;
        const position = idx * (800 / meteorCount) - 400;

        return {
          left: position + "px",
          animationDelay: Math.random() * 5 + "s",
          animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
        };
      });

      setMeteorStyles(styles);
    }, 750);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="hidden md:block"
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={`animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-white before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-[''] ${className}`}
          style={{
            top: "-30px",
            willChange: "transform, opacity",
            ...style,
          }}
        ></span>
      ))}
    </motion.div>
  );
};
