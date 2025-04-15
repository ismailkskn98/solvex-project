import React from "react";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import Link from "next/link";
import { Link } from "@/i18n/navigation";

const socialItems = [
  { href: "https://t.me/SolvexNetworkOfficial", icon: FaTelegramPlane },
  { href: "https://x.com/solvexnetwork?s=21&t=ElAa-G1dx7k5E7DsvvtmUA", icon: FaXTwitter },
];

const navItem = [
  { href: "/", title: "Anasayfa" },
  { href: "/about", title: "Hakkımızda" },
  { href: "/road-map", title: "Yol Haritası" },
  { href: "/team", title: "Takım" },
  { href: "/sss", title: "SSS" },
  { href: "/contact", title: "İletisim" },
];

export default function Footer() {
  return (
    <footer className="relative fluid gridContainer overflow-hidden">
      <Image src="/images/common/footer-bg.svg" alt="solvex footer background" width={2000} height={500} className="fluid absolute inset-x-0 bottom-0 w-full h-full object-cover opacity-30 -z-20" />
      <div className="fluid absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent -z-10"></div>
      <main className="w-full flex flex-col">
        <section className="w-full max-w-9/12 mx-auto flex items-start justify-between gap-28 py-16">
          <article className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Image src={"/images/common/logo.png"} width={150} height={70} alt="" className="w-[min(10vw,64px)] h-[min(10vw,64px)]" />
              <span className="font-black text-white text-[min(10vw,30px)]">Solvex</span>
            </div>
            <p className="text-sm text-white/70 max-w-md leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt reprehenderit perferendis cum doloremque dolorum placeat asperiores adipisci nostrum, amet iure!
            </p>
            <div className="flex flex-col items-start gap-3 mt-2">
              <span className="capitalize text-white text-lg">Community</span>
              <div className="flex items-center gap-3">
                {socialItems.map(({ href, icon: Icon }, index) => (
                  <Link href={href} key={index} className="w-14 h-14 rounded-[50%] group bg-white/5 border border-white/10 p-3 flex items-center justify-center hover:bg-logo transition-all duration-200">
                    <Icon className="text-white text-2xl group-hover:text-black transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </article>
          <article className="flex flex-col items-start gap-5">
            <h3 className="font-medium text-white">Hızlı Erişim</h3>
            <div className="flex flex-col items-start gap-3 text-white/65">
              {navItem.map((item, i) => (
                <Link href={item.href} key={i} className="hover:text-white transition-all duration-150 cursor-pointer">
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
          <article className="flex flex-col items-start gap-5 max-w-sm">
            <h3 className="font-medium text-white">Hızlı Erişim</h3>
            <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi?</p>
            <Link href="mailto:info@solvex.network" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-[50%] bg-white/5 border border-white/10 p-3 flex items-center justify-center group-hover:bg-logo transition-all duration-200">
                <FaXTwitter className="text-white text-2xl group-hover:text-black transition-all duration-200" />
              </div>
              <div className="flex flex-col item-start gap-0.5">
                <span className="text-white/70 capitalize font-medium">Email</span>
                <span className="text-white/90">info@solvex.network</span>
              </div>
            </Link>
          </article>
        </section>
        <section className="w-full flex items-center justify-center px-4 py-6 border-t border-white/20">
          <p className="text-base text-white/70">WeeCoins Premium © Tüm Hakları Saklıdır.</p>
        </section>
      </main>
    </footer>
  );
}
