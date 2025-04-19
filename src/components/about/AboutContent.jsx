import React from "react";
import SplineDesing from "./SplineDesing";
import PageTitle from "../common/PageTitle";
import AboutCards from "./AboutCards";
import Image from "next/image";
import AboutImage from "@/../public/images/about-image.webp";
import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations("AboutPage");
  return (
    <main className="fluid gridContainer mb-16 w-full">
      <PageTitle title={t("h1")} />
      <section className="mx-auto flex min-h-[500px] w-full max-w-full flex-col items-center justify-between gap-5 lg:flex-row xl:max-w-11/12 2xl:max-w-10/12">
        <article className="order-2 flex flex-1 flex-col items-start lg:order-1">
          <h2 className="mb-3 bg-clip-text text-[clamp(23px,4vw,40px)] font-medium text-white">
            {t("h2")}
          </h2>
          <p className="text-base text-neutral-300 md:text-base lg:leading-7">
            {t("subtitle")}
          </p>
          <p className="mt-4 text-base text-neutral-300 md:text-base lg:leading-7">
            {t("subtitle2")}
          </p>
        </article>
        <article className="relative order-1 h-[350px] min-h-[350px] w-full max-w-full flex-1 lg:order-1 lg:h-[120%] lg:max-w-1/2 xl:max-w-[40%]">
          <Image
            src={AboutImage}
            placeholder="blur"
            blurDataURL={AboutImage.blurDataURL}
            alt="contact image"
            width={480}
            height={520}
            quality={100}
            className="block h-full w-full object-contain lg:hidden"
          />
          <SplineDesing />
        </article>
      </section>
      <AboutCards />
    </main>
  );
}
