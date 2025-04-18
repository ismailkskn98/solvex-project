import React from "react";
import PageTitle from "../common/PageTitle";
import ContactForm from "./ContactForm";
import ContactSpline from "./ContactSpline";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import contactImage from "@/../public/images/contact-image.webp";
import { useTranslations } from "next-intl";

export default function ContactMain() {
  const t = useTranslations("ContactPage");
  return (
    <main className="">
      <PageTitle title={t("h1")} />
      <section className="mx-auto mt-20 mb-20 flex w-full max-w-full flex-col items-start gap-6 rounded-lg border border-white/10 bg-black px-4 py-8 md:px-8 lg:flex-row xl:max-w-11/12 2xl:max-w-9/12">
        <article className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-2">
            <h2 id="contact_form" className="text-3xl font-medium text-white">
              {t("h2")}
            </h2>
            <p className="text-sm text-white/80">{t("subtitle")}</p>
          </div>
          <ContactForm />
        </article>
        <article className="relative h-full min-h-[350px] w-full flex-1 lg:min-h-[500px]">
          <ContactSpline />
          <Image
            quality={100}
            src={contactImage}
            placeholder="blur"
            blurDataURL={contactImage.blurDataURL}
            alt="contact image"
            width={500}
            height={350}
            className="block h-full w-full object-cover lg:hidden"
          />
          <div className="absolute right-0 bottom-0 z-50 flex items-center gap-3">
            <Link
              href={"mailto:info@solvex.network"}
              className="hover:bg-logo flex h-12 w-12 items-center justify-center rounded-[50%] border border-white/10 text-lg text-white"
            >
              <MdOutlineEmail />
            </Link>
            <Link
              href={"https://t.me/SolvexNetworkOfficial"}
              target="_blank"
              className="hover:bg-logo flex h-12 w-12 items-center justify-center rounded-[50%] border border-white/10 text-lg text-white"
            >
              <FaTelegramPlane />
            </Link>
            <Link
              href={"https://x.com/solvexnetwork?s=21&t=ElAa-G1dx7k5E7DsvvtmUA"}
              target="_blank"
              className="hover:bg-logo flex h-12 w-12 items-center justify-center rounded-[50%] border border-white/10 text-lg text-white"
            >
              <FaXTwitter />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
