import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

export default function HeroContent() {
  const t = useTranslations("HomePage");
  return (
    <article className="relative z-50 flex w-full max-w-[1300px] flex-col items-center justify-center gap-3">
      <div className="from-lavender-light flex flex-col items-center justify-center bg-gradient-to-l to-white bg-clip-text px-4 text-center text-transparent">
        <h1 className="text-[min(10vw,48px)] font-black">Solvex Network</h1>
        <p className="text-[min(3.8vw,23px)] font-medium">{t("heroContent")}</p>
      </div>
      <p className="px-4 text-center text-sm text-white/60">
        {t("heroSubContent")}
      </p>
      <div className="mt-2 flex items-center gap-4 font-medium capitalize">
        <Link
          href="https://skynet.certik.com/projects/solvex-network"
          target="_black"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full border-2 border-white/20 bg-white/15 px-5 py-3 text-nowrap text-white capitalize transition hover:bg-white/30"
        >
          {t("auditReports")}
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer rounded-full bg-white px-5 py-3 text-black/80 capitalize transition hover:bg-white/70"
        >
          {t("navbar.contact")}
        </Link>
      </div>
    </article>
  );
}
