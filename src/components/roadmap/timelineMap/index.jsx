import PageTitle from "@/components/common/PageTitle";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import React from "react";

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
      <PageTitle title={"Yol haritası"} />
      <section className="relative w-full overflow-clip">
        <Timeline data={data} />
      </section>
    </main>
  );
}
