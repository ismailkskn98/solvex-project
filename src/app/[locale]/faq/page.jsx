import FaqContent from "@/components/faq/FaqContent";
import React from "react";
import { generateMetadata as layoutMetadata } from "../layout";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale });
  const defaultMetaData = await layoutMetadata({ params });

  return {
    ...defaultMetaData,
    title: `Solvex Network | ${t("FaqPage.h1")}`,
  };
}

export default function Faq() {
  return (
    <>
      <FaqContent />
    </>
  );
}
