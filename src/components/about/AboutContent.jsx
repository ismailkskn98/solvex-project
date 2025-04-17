import React from "react";
import SplineDesing from "./SplineDesing";
import PageTitle from "../common/PageTitle";
import AboutCards from "./AboutCards";

export default function AboutContent() {
  return (
    <main className="fluid gridContainer w-full">
      <PageTitle title={"Hakkımızda"} />
      <section className="mx-auto flex min-h-[400px] w-full max-w-10/12 items-center justify-between">
        <article className="flex flex-1 flex-col items-start">
          <h2 className="bg-clip-text text-[clamp(23px,4vw,45px)] font-medium text-white">
            SolvexNetwork Neyi Amaçlıyor?
          </h2>
          <p className="text-base text-neutral-300 md:text-base">
            SolvexNetwork, blockchain teknolojisinin karmaşasını ortadan
            kaldıran yenilikçi ürünler sunarak, toplumu teknik bilgiye ihtiyaç
            duymadan bu alandan faydalanabilir hale getirmeyi amaçlar.
            Geliştirdiğimiz çözümler ile kullanıcı dostu deneyimler ve yüksek
            güvenlik standartlarını bir araya getiriyor; bireylerin, kurumların
            ve geliştiricilerin blockchain ekosistemine kolayca entegre olmasını
            sağlıyoruz.
          </p>
        </article>
        <article className="relative h-full w-full max-w-[40%] flex-1">
          <SplineDesing />
        </article>
      </section>
      <AboutCards />
    </main>
  );
}
