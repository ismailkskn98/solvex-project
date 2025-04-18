import React from "react";
import TokenDistribution from "./TokenDistribution";

export default function Token() {
  const tokenAllocations = [
    {
      name: "Marketing",
      percentage: 7,
      amount: 7000000,
      description: "Marketing and promotional activities",
      color: "#d9b6ff",
    },
    {
      name: "Development",
      percentage: 2,
      amount: 2000000,
      description: "Development fund",
      color: "#6d18ff",
    },
    {
      name: "Liquidity",
      percentage: 2,
      amount: 2000000,
      description: "PancakeSwap liquidity pool",
      color: "#05031f",
    },
    {
      name: "Burned Tokens",
      percentage: 50,
      amount: 50000000,
      description: "Permanently burned tokens",
      color: "#43256e",
    },
    {
      name: "Community & Market Circulation",
      percentage: 39,
      amount: 39000000,
      description: "Tokens in circulation",
      color: "#ffffff",
    },
  ];
  return (
    <main className="fluid gridContainer mt-24 mb-10 w-full">
      <section className="flex flex-col items-center justify-center gap-9 sm:gap-12 md:gap-16">
        <article className="w-full flex-col items-center justify-center bg-gradient-to-t from-black to-white bg-clip-text text-center text-transparent">
          <h2 className="text-[min(7vw,50px)] font-semibold capitalize">
            sasafsas
          </h2>
          <p className="font-base text-[clamp(14px,1.5vw,18px)] leading-7 text-white/70 sm:leading-8 lg:leading-9">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            quibusdam?
          </p>
        </article>

        <TokenDistribution tokenAllocations={tokenAllocations} />
      </section>
    </main>
  );
}
