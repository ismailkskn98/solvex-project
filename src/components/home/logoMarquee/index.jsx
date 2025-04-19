import React from "react";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    href: "https://skynet.certik.com/projects/solvex-network",
    image: "/images/carousel-images/skynet.svg",
    name: "Skynet Certik",
  },
  {
    href: "https://coinmarketcap.com/currencies/solvex-network/",
    image: "/images/carousel-images/CoinMarketCap.webp",
    name: "CoinMarketCap",
  },
  {
    href: "https://www.bitmart.com/trade/en-US?type=spot&symbol=SOLVEX_USDT",
    image: "/images/carousel-images/bitmart.svg",
    name: "bitmart",
  },
  {
    href: "https://www.coingecko.com/tr/coins/solvex-network",
    image: "/images/carousel-images/coincostlogo.webp",
    name: "CoinCost",
  },
  {
    href: "https://www.mexc.com/exchange/SOLVEX_USDT",
    image: "/images/carousel-images/mexc.svg",
    name: "Mexc",
  },
  {
    href: "https://www.kcex.com/tr-TR/exchange/SOLVEX_USDT",
    image: "/images/carousel-images/kcex.png",
    name: "Mexc",
  },
];

export default function LogoMarquee() {
  return (
    <Marquee className="mt-6 max-w-full [--duration:40s]">
      {companies.map((company, id) => (
        <Link href={company.href} target="_blank" key={id}>
          <Image
            width={112}
            height={80}
            src={company.image}
            alt={company.name || ""}
            quality={70}
            className={`h-[90px] w-[90px] object-contain object-center grayscale-[95%] transition-all duration-200 hover:grayscale-0 ${company.name === "bitmart" ? "invert-100" : ""}`}
          />
        </Link>
      ))}
    </Marquee>
  );
}
