"use client";
import React, { useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import classNames from "classnames";
import * as motion from "motion/react-client";

export default function Navbar() {
  const pathname = usePathname();

  const navItem = [
    { href: "/", title: "Anasayfa" },
    { href: "/about", title: "Hakkımızda" },
    { href: "/road-map", title: "Yol Haritası" },
    { href: "/team", title: "Takım" },
    { href: "/sss", title: "SSS" },
    { href: "/contact", title: "İletisim" },
  ];

  return (
    <nav className="flex items-center justify-between gap-9 px-9 py-5 rounded-4xl bg-white/5 text-white/50">
      {navItem.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={classNames("relative font-medium", {
            "text-transparent bg-gradient-to-l bg-clip-text from-white/50 via-white to-white/50": pathname === item.href,
          })}
        >
          {item.title}
          {pathname === item.href && (
            <motion.div
              layoutId="active"
              className={classNames("absolute inset-x-0 -bottom-5 -z-10 h-[1px] bg-gradient-to-l from-transparent via-white to-transparent drop-shadow-[0_-5px_5px_white]")}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
