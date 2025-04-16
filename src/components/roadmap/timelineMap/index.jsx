import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import React from "react";
import SplineDesing from "../SplineDesing";

export default function TimeLineMap() {
  const t = useTranslations("RoadMapPage");
  const data = [
    {
      title: t("q1_2025.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q1_2025.content.1")}
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q1_2025.content.2")}
          </p>
        </div>
      ),
    },
    {
      title: t("q2_2025.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q2_2025.content.1")}
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q2_2025.content.2")}
          </p>
        </div>
      ),
    },
    {
      title: t("q3_2025.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q3_2025.content.1")}
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q3_2025.content.2")}
          </p>
        </div>
      ),
    },
    {
      title: t("q4_2025.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q4_2025.content.1")}
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q4_2025.content.2")}
          </p>
        </div>
      ),
    },
    {
      title: t("q1_2026.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q1_2026.content.1")}
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q1_2026.content.2")}
          </p>
        </div>
      ),
    },
    {
      title: t("q2_2026.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q2_2026.content.1")}
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm">
            {t("q2_2026.content.2")}
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="relative w-full">
      <SplineDesing />
      <article className="mx-auto mt-20 w-full max-w-[1280px]">
        <h1 className="bg-gradient-to-t from-black to-white bg-clip-text text-[clamp(40px,6vw,80px)] font-semibold text-transparent">
          Yol haritası
        </h1>
        <p className="max-w-[75%] text-base text-neutral-300 md:text-base">
          Solvex Network, kullanıcı dostu çözümleriyle blockchain teknolojisini
          herkes için erişilebilir kılmayı hedefliyor. Yol haritamız, güvenli ve
          merkeziyetsiz bir gelecek inşa etme vizyonumuzu adım adım ortaya
          koyuyor.
        </p>
      </article>
      <section className="relative w-full overflow-clip">
        <Timeline data={data} />
      </section>
    </main>
  );
}
