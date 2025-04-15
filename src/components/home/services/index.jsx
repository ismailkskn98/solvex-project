import React from "react";
import ServiceCard from "./serviceCard";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdDomainVerification } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import Threads from "@/components/ui/threadBackground";
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
    <main className="fluid gridContainer overf relative mt-32 w-full">
      <div className="fluid absolute inset-x-0 top-0 -z-10 h-full w-full overflow-hidden min-[1350px]:top-[30rem]">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <section className="flex flex-col items-center justify-center gap-16">
        <article className="w-full flex-col items-center justify-center bg-gradient-to-t from-black to-white bg-clip-text text-center text-transparent">
          <h2 className="text-[min(3.6vw,50px)] font-semibold">
            {t("services")}
          </h2>
          <p className="font-base text-[min(1.3vw,18px)] leading-9 text-white/80">
            {t("servicesSubtitle")}
          </p>
        </article>
        <main className="mx-auto grid grid-cols-1 justify-items-stretch gap-8 min-[1350px]:!grid-cols-4 sm:grid-cols-2">
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
