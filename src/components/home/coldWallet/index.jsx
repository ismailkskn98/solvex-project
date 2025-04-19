"use client";
import { useTranslations } from "next-intl";
import ColdWalletContent from "./ColdWalletContent";

export function ColdWallet() {
  const t = useTranslations("HomePage");

  const data = [
    {
      title: t("solvexWalletData.whySolvex.title"),
      content: t("solvexWalletData.whySolvex.content"),
      srcImage: "/images/solvex-wallet/solvex-wallet-1.webp",
    },
    {
      title: t("solvexWalletData.security.title"),
      content: t("solvexWalletData.security.content"),
      srcImage: "/images/solvex-wallet/solvex-wallet-2.webp",
    },
    {
      title: t("solvexWalletData.Web3.title"),
      content: t("solvexWalletData.Web3.content"),
      srcImage: "/images/solvex-wallet/solvex-wallet-3.webp",
    },
    {
      title: t("solvexWalletData.safe.title"),
      content: t("solvexWalletData.safe.content"),
      srcImage: "/images/solvex-wallet/solvex-wallet-4.webp",
    },
  ];

  return (
    <main className="fluid gridContainer relative mt-20 w-full pb-24 lg:pb-32 xl:pb-40 2xl:pb-48">
      <div className="fluid absolute inset-0 -z-10 bg-gradient-to-t from-[#2f2f4e]/50 to-transparent"></div>
      <section className="flex w-full flex-col items-center justify-between gap-9 sm:gap-12 md:gap-16">
        <article className="w-full flex-col items-center justify-center bg-gradient-to-t from-black to-white bg-clip-text text-center text-transparent">
          <h2 className="text-[min(7vw,50px)] font-semibold capitalize">
            Wallet
          </h2>
          <p className="font-base text-[clamp(13px,2.6vw,15px)] leading-6 text-white/80 lg:leading-8 xl:leading-9">
            {t("solvexWalletSubtitle")}
          </p>
        </article>
        <ColdWalletContent data={data} />
      </section>
    </main>
  );
}
