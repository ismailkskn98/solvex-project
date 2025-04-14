import { useTranslations } from "next-intl";
import Hero from "@/components/home/hero";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main className="min-h-[500vh]">
      <Hero />
    </main>
  );
}
