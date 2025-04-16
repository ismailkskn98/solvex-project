"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";

export default function MobileNavbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Drawer
      direction="right"
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
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <button>Submit</button>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
