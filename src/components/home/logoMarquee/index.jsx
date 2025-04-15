import React from "react";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";

const companies = [
  { href: "https://skynet.certik.com/projects/solvex-network", image: "/images/carousel-images/skynet.svg", name: "Skynet Certik" },
  {
    href: "https://coinpaprika.com/tr/coin/wcp-weecoins-premium/",
    image: "/images/carousel-images/Coinpaprika.webp",
    title: "Coinpaprika",
  },
  { href: "https://coinmarketcap.com/currencies/solvex-network/", image: "/images/carousel-images/CoinMarketCap.webp", name: "CoinMarketCap" },
  { href: "https://www.coingecko.com/tr/coins/solvex-network", image: "/images/carousel-images/coincostlogo.webp", name: "CoinCost" },
  { href: "https://www.mexc.com/exchange/SOLVEX_USDT", image: "/images/carousel-images/mexc.svg", name: "Mexc" },
  { href: "https://www.coinbase.com/price/weecoins-premium", image: "/images/carousel-images/Coinbase-New.webp", name: "Coinbase" },
  { href: "https://www.coingecko.com/tr/coins/weecoins-premium", image: "/images/carousel-images/coingecko-1.webp", name: "CoinGecko" },
];

export default function LogoMarquee() {
  return (
    <Marquee className="max-w-full [--duration:40s] mt-2">
      {companies.map((company, id) => (
        <Link href={company.href} target="_blank" key={id}>
          <Image width={112} height={80} src={company.image} className="h-[70px] w-[90px] grayscale-[95%] hover:grayscale-0 transition-all duration-200" alt={company.name} />
        </Link>
      ))}
    </Marquee>
  );
}
