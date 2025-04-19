import React from "react";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { MdOutlineEmail } from "react-icons/md";

const socialItems = [
  { href: "https://t.me/SolvexNetworkOfficial", icon: FaTelegramPlane },
  {
    href: "https://x.com/solvexnetwork?s=21&t=ElAa-G1dx7k5E7DsvvtmUA",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  const t = useTranslations("HomePage");
  const navItem = [
    { href: "/", title: t("navbar.home") },
    { href: "/about", title: t("navbar.about") },
    { href: "/products", title: t("navbar.products") },
    { href: "/faq", title: t("navbar.faq") },
    { href: "/contact", title: t("navbar.contact") },
  ];
  const quickAccessItems = [
    {
      href: "/products#products",
      title: t("footer.quickAccessItems.products"),
    },
    { href: "/about#we_offer", title: t("footer.quickAccessItems.weOffer") },
    {
      href: "/contact#contact_form",
      title: t("footer.quickAccessItems.contact"),
    },
    { href: "/faq", title: t("footer.quickAccessItems.faq") },
  ];

  return (
    <footer className="fluid gridContainer relative overflow-hidden">
      <Image
        src="/images/common/footer-bg.svg"
        alt="solvex footer background"
        width={2000}
        height={500}
        className="fluid absolute inset-x-0 bottom-0 -z-20 h-full w-full object-cover opacity-30"
      />
      <div className="fluid absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      <main className="flex w-full flex-col">
        <section className="mx-auto grid w-full max-w-full place-content-start justify-stretch gap-12 py-16 sm:grid-cols-2 md:grid-cols-4 md:place-items-center xl:max-w-11/12 xl:gap-12 2xl:max-w-9/12 2xl:gap-16">
          <article className="col-span-2 flex flex-col gap-5 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src={"/images/common/logo.webp"}
                width={150}
                height={70}
                alt=""
                className="h-[min(10vw,64px)] w-[min(10vw,64px)]"
              />
              <span className="text-[min(10vw,30px)] font-black text-white">
                Solvex
              </span>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/70">
              {t("footer.logoSubtitle")}
            </p>
            <div className="mt-2 flex flex-col items-start gap-3">
              <span className="text-sm text-white capitalize">
                {t("footer.community")}
              </span>
              <div className="flex items-center gap-3">
                {socialItems.map(({ href, icon: Icon }, index) => (
                  <Link
                    href={href}
                    key={index}
                    className="group hover:bg-logo flex h-12 w-12 items-center justify-center rounded-[50%] border border-white/10 bg-white/5 p-3 transition-all duration-200"
                  >
                    <Icon className="text-xl text-white transition-all duration-200 group-hover:text-black" />
                  </Link>
                ))}
              </div>
            </div>
          </article>
          <article className="flex flex-col items-start gap-5 text-nowrap">
            <h3 className="font-medium text-white">{t("footer.siteMap")}</h3>
            <div className="flex flex-col items-start gap-3 text-white/65">
              {navItem.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  className="cursor-pointer transition-all duration-150 hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </article>
          <article className="flex flex-col items-start gap-5 text-nowrap">
            <h3 className="font-medium text-white">
              {t("footer.quickAccess")}
            </h3>

            <div className="flex flex-col items-start gap-3 text-white/70">
              {quickAccessItems.map((item, i) => (
                <Link href={item.href} key={i} className="">
                  {item.title}
                </Link>
              ))}
            </div>
          </article>
          <article className="col-span-2 flex max-w-sm flex-col items-start gap-5 md:col-span-1">
            <h3 className="font-medium text-nowrap text-white">
              {t("footer.contactTitle")}
            </h3>
            <p className="text-sm text-white/80">
              {t("footer.contactSubtitle")}
            </p>
            <Link
              href="mailto:info@solvex.network"
              className="group flex items-center gap-3"
            >
              <div className="group-hover:bg-logo flex h-12 w-12 items-center justify-center rounded-[50%] border border-white/10 bg-white/5 p-3 transition-all duration-200">
                <MdOutlineEmail className="text-xl text-white transition-all duration-200 group-hover:text-black" />
              </div>
              <div className="item-start flex flex-col gap-0.5">
                <span className="font-medium text-white/70 capitalize">
                  Email
                </span>
                <span className="text-white/90">info@solvex.network</span>
              </div>
            </Link>
          </article>
        </section>
        <section className="flex w-full items-center justify-center border-t border-white/20 px-4 py-6">
          <p className="text-base text-white/70">
            {t("footer.copyright")} By -{" "}
            <Link
              href="https://www.weecoinspremium.com"
              target="_blank"
              className="decoration-purple-bright text-sm capitalize underline hover:text-white"
            >
              Weecoins Premium
            </Link>
          </p>
          <small className="pointer-events-none absolute right-0 bottom-0 -z-50 bg-transparent text-transparent opacity-0">
            İsmail Keskin
          </small>
        </section>
      </main>
    </footer>
  );
}
