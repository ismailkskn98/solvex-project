import React from "react";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const socialItems = [
  { href: "https://t.me/SolvexNetworkOfficial", icon: FaTelegramPlane },
  {
    href: "https://x.com/solvexnetwork?s=21&t=ElAa-G1dx7k5E7DsvvtmUA",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  const t = useTranslations("Navbar");
  const navItem = [
    { href: "/", title: t("home") },
    { href: "/about", title: t("about") },
    { href: "/road-map", title: t("roadMap") },
    { href: "/team", title: t("team") },
    { href: "/sss", title: t("faq") },
    { href: "/contact", title: t("contact") },
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
        <section className="mx-auto flex w-full max-w-9/12 items-start justify-between gap-28 py-16">
          <article className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Image
                src={"/images/common/logo.png"}
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              reprehenderit perferendis cum doloremque dolorum placeat
              asperiores adipisci nostrum, amet iure!
            </p>
            <div className="mt-2 flex flex-col items-start gap-3">
              <span className="text-lg text-white capitalize">Community</span>
              <div className="flex items-center gap-3">
                {socialItems.map(({ href, icon: Icon }, index) => (
                  <Link
                    href={href}
                    key={index}
                    className="group hover:bg-logo flex h-14 w-14 items-center justify-center rounded-[50%] border border-white/10 bg-white/5 p-3 transition-all duration-200"
                  >
                    <Icon className="text-2xl text-white transition-all duration-200 group-hover:text-black" />
                  </Link>
                ))}
              </div>
            </div>
          </article>
          <article className="flex flex-col items-start gap-5">
            <h3 className="font-medium text-white">Hızlı Erişim</h3>
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
          <article className="flex flex-col items-start gap-5">
            <h3 className="font-medium text-white">Hızlı Erişim</h3>
            <div className="flex flex-col items-start gap-3 text-white/70">
              {navItem.map((item, i) => (
                <Link href={item.href} key={i} className="">
                  {item.title}
                </Link>
              ))}
            </div>
          </article>
          <article className="flex max-w-sm flex-col items-start gap-5">
            <h3 className="font-medium text-white">Hızlı Erişim</h3>
            <p className="text-sm text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              excepturi?
            </p>
            <Link
              href="mailto:info@solvex.network"
              className="group flex items-center gap-3"
            >
              <div className="group-hover:bg-logo flex h-14 w-14 items-center justify-center rounded-[50%] border border-white/10 bg-white/5 p-3 transition-all duration-200">
                <FaXTwitter className="text-2xl text-white transition-all duration-200 group-hover:text-black" />
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
            WeeCoins Premium © Tüm Hakları Saklıdır.
          </p>
        </section>
      </main>
    </footer>
  );
}
