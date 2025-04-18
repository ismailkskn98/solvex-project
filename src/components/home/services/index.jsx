import React from "react";
import ServiceCard from "./serviceCard";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdDomainVerification } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("HomePage");

  const servicesItem = [
    {
      title: t("servicesItem.system.title"),
      content: t("servicesItem.system.content"),
      icon: MdDomainVerification,
    },
    {
      title: t("servicesItem.safe.title"),
      content: t("servicesItem.safe.content"),
      icon: MdOutlineHealthAndSafety,
    },
    {
      title: t("servicesItem.platform.title"),
      content: t("servicesItem.platform.content"),
      icon: FaPowerOff,
    },
    {
      title: t("servicesItem.blockchain.title"),
      content: t("servicesItem.blockchain.content"),
      icon: SiBlockchaindotcom,
    },
  ];

  return (
    <main className="fluid gridContainer overf relative mt-20 w-full lg:mt-32">
      <div className="fluid absolute inset-x-0 top-0 -z-10 hidden h-full w-full overflow-hidden md:top-[min(30vw,30rem)] md:block"></div>
      <section className="fluid flex flex-col items-center justify-center gap-9 sm:gap-12 md:gap-16">
        <article className="w-full flex-col items-center justify-center bg-gradient-to-t from-black to-white bg-clip-text text-center text-transparent">
          <h2 className="text-[min(7vw,50px)] font-semibold capitalize">
            {t("services")}
          </h2>
          <p className="font-base text-[clamp(14px,1.5vw,18px)] leading-7 text-white/70 sm:leading-8 lg:leading-9">
            {t("servicesSubtitle")}
          </p>
        </article>
        <main className="mx-auto grid grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-8">
          {servicesItem.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </main>
      </section>
    </main>
  );
}
