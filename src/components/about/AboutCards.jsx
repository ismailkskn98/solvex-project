import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { useTranslations } from "next-intl";

export default function AboutCards() {
  const t = useTranslations("AboutPage");
  const aboutCards = [
    {
      title: t("cards.verify.title"),
      description: t("cards.verify.content"),
    },
    {
      title: t("cards.secure.title"),
      description: t("cards.secure.content"),
    },
    {
      title: t("cards.onRamp.title"),
      description: t("cards.onRamp.content"),
    },
    {
      title: t("cards.smart.title"),
      description: t("cards.smart.content"),
    },
  ];

  return (
    <div className="relative z-50 mx-auto mt-16 w-full max-w-full lg:mt-1 xl:max-w-11/12 2xl:max-w-10/12">
      <h2
        id="we_offer"
        className="px-2 text-[clamp(23px,4vw,40px)] font-medium text-white"
      >
        {t("cards.title")}
      </h2>
      <HoverEffect items={aboutCards} />
    </div>
  );
}
