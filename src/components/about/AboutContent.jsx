import React from "react";
import SplineDesing from "./SplineDesing";
import PageTitle from "../common/PageTitle";
import AboutCards from "./AboutCards";

export default function AboutContent() {
  return (
    <main className="fluid gridContainer w-full">
      <PageTitle title={"Hakkımızda"} />
      <section className="mx-auto flex min-h-[500px] w-full max-w-10/12 items-center justify-between gap-5">
        <article className="flex flex-1 flex-col items-start">
          <h2 className="mb-3 bg-clip-text text-[clamp(23px,4vw,40px)] font-medium text-white">
            SolvexNetwork Neyi Amaçlıyor?
          </h2>
          <p className="text-base text-neutral-300 md:text-base lg:leading-7">
            SolvexNetwork, blockchain teknolojisinin karmaşasını ortadan
            kaldıran yenilikçi ürünler sunarak, toplumu teknik bilgiye ihtiyaç
            duymadan bu alandan faydalanabilir hale getirmeyi amaçlar.
            Geliştirdiğimiz çözümler ile kullanıcı dostu deneyimler ve yüksek
            güvenlik standartlarını bir araya getiriyor; bireylerin, kurumların
            ve geliştiricilerin blockchain ekosistemine kolayca entegre olmasını
            sağlıyoruz.
          </p>
          <p className="mt-4 text-base text-neutral-300 md:text-base lg:leading-7">
            Güvenli, şeffaf ve erişilebilir bir dijital ekonomi inşa etmek için
            çalışıyoruz. Herkesin blockchain avantajlarından yararlanabilmesini
            hedefleyen bir vizyonla ilerliyoruz.
          </p>
        </article>
        <article className="relative h-[120%] w-full max-w-[40%] flex-1">
          <SplineDesing />
        </article>
      </section>
      <AboutCards />
    </main>
  );
}
