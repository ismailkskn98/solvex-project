import { useTranslations } from "next-intl";
import Hero from "@/components/home/hero";
import WhatSolvex from "@/components/home/whatSolvex";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="min-h-[300vh]">
      <Hero />
      <WhatSolvex />
    </main>
  );
}
