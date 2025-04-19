import React from "react";
import TokenDistribution from "./TokenDistribution";
import { useTranslations } from "next-intl";

export default function Token() {
  const t = useTranslations("HomePage");
  const tokenAllocations = [
    {
      name: t("tokenAllocations.marketing.title"),
      percentage: 7,
      amount: 7000000,
      description: t("tokenAllocations.marketing.content"),
      color: "#d9b6ff",
    },
    {
      name: t("tokenAllocations.development.title"),
      percentage: 2,
      amount: 2000000,
      description: t("tokenAllocations.development.title"),
      color: "#6d18ff",
    },
    {
      name: t("tokenAllocations.liquidity.title"),
      percentage: 2,
      amount: 2000000,
      description: t("tokenAllocations.liquidity.title"),
      color: "#05031f",
    },
    {
      name: t("tokenAllocations.burnedTokens.title"),
      percentage: 50,
      amount: 50000000,
      description: t("tokenAllocations.burnedTokens.title"),
      color: "#43256e",
    },
    {
      name: t("tokenAllocations.communit.title"),
      percentage: 39,
      amount: 39000000,
      description: t("tokenAllocations.communit.title"),
      color: "#ffffff",
    },
  ];
  return (
    <main className="fluid gridContainer mt-24 mb-10 w-full">
      <section className="flex flex-col items-center justify-center gap-9 sm:gap-12 md:gap-16">
        <article className="w-full flex-col items-center justify-center bg-gradient-to-t from-black to-white bg-clip-text text-center text-transparent">
          <h2 className="text-[min(7vw,50px)] font-semibold capitalize">
            {t("tokenTitle")}
          </h2>
          <p className="font-base text-[clamp(14px,1.5vw,18px)] leading-7 text-white/70 sm:leading-8 lg:leading-9">
            {t("tokenSubtitle")}
          </p>
        </article>

        <TokenDistribution tokenAllocations={tokenAllocations} />
      </section>
    </main>
  );
}
