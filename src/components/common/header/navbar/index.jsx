"use client";
import React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import classNames from "classnames";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  const navItem = [
    { href: "/", title: t("navbar.home") },
    { href: "/about", title: t("navbar.about") },
    { href: "/road-map", title: t("navbar.roadMap") },
    { href: "/team", title: t("navbar.team") },
    { href: "/sss", title: t("navbar.faq") },
    { href: "/contact", title: t("navbar.contact") },
  ];

  return (
    <nav className="hidden items-center justify-between gap-5 rounded-4xl bg-white/5 px-8 py-4 text-white/50 lg:flex xl:gap-9">
      {navItem.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={classNames(
            "relative text-[clamp(13px,1.2vw,16px)] text-nowrap capitalize hover:text-white/80",
            {
              "bg-gradient-to-l from-white/50 via-white to-white/50 bg-clip-text text-transparent":
                pathname === item.href,
            },
          )}
        >
          {item.title}
          {pathname === item.href && (
            <motion.div
              layoutId="active"
              className={classNames(
                "absolute inset-x-0 -bottom-4 -z-10 h-[1px] bg-gradient-to-l from-transparent via-white to-transparent drop-shadow-[0_-5px_5px_white]",
              )}
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
