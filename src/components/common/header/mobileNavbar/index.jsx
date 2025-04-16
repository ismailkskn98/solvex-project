"use client";
import React from "react";
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

export default function MobileNavbar() {
  return (
    <Drawer
      direction="right"
      onOpenChange={(value) => {
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
      <DrawerTrigger className="block text-white lg:hidden">Open</DrawerTrigger>
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
