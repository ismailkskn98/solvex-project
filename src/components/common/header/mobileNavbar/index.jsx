"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { HiHome } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaSitemap } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "motion/react";
import { RiContactsBookFill } from "react-icons/ri";

export default function MobileNavbar() {
  const [openNav, setOpenNav] = useState(true);
  const pathname = usePathname();
  const t = useTranslations("HomePage");

  const navItem = [
    { href: "/", title: t("navbar.home"), icon: HiHome },
    { href: "/about", title: t("navbar.about"), icon: BsBuildingsFill },
    { href: "/road-map", title: t("navbar.roadMap"), icon: FaSitemap },
    { href: "/team", title: t("navbar.team"), icon: FaUsers },
    { href: "/sss", title: t("navbar.faq"), icon: FaQuestionCircle },
    { href: "/contact", title: t("navbar.contact"), icon: RiContactsBookFill },
  ];

  return (
    <Drawer
      direction="right"
      defaultOpen={true}
      onOpenChange={(value) => {
        setOpenNav(value);
        if (document.querySelector("#layout-main")) {
          if (value) {
            document.querySelector("#layout-main").style.transform =
              "translate3d(-80%,0,0)";
          } else {
            document.querySelector("#layout-main").style.transform =
              "translate3d(0,0,0)";
          }
        }
      }}
    >
      <DrawerTrigger className="relative block text-3xl text-white lg:hidden">
        <CiMenuFries
          className={classNames(
            "absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-300",
            {
              "opacity-100": !openNav,
              "opacity-0": openNav,
            },
          )}
        />
        <IoCloseOutline
          className={classNames(
            "absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-300",
            {
              "opacity-100": openNav,
              "opacity-0": !openNav,
            },
          )}
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-1 p-0">
          <DrawerTitle>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/images/common/logo.png"}
                width={60}
                height={60}
                alt=""
                className="h-[min(10vw,45px)] w-[min(10vw,45px)]"
              />
              <span className="text-[min(10vw,22px)] font-black text-black">
                Solvex
              </span>
            </Link>
          </DrawerTitle>
          <section className="mt-12 flex-1">
            <main className="flex flex-col items-start">
              {navItem.map(({ href, title, icon: Icon }, index) => (
                <Link
                  href={href}
                  key={index}
                  className={classNames(
                    "relative flex w-full items-center gap-3 px-4 py-4 capitalize transition-all duration-200",
                    {
                      "text-white grayscale-0": pathname === href,
                      "text-black grayscale-100": pathname !== href,
                    },
                  )}
                >
                  <Icon className="text-xl" />
                  {title}
                  {pathname === href && (
                    <motion.span
                      layoutId="active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className={classNames(
                        "from-logo absolute inset-0 -z-10 h-full w-full border-l-8 border-[#0e51a5] bg-gradient-to-r from-40% to-transparent",
                      )}
                    ></motion.span>
                  )}
                </Link>
              ))}
            </main>
          </section>
        </DrawerHeader>
        <DrawerFooter className="mb-3">
          <DrawerClose>Kapat</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
