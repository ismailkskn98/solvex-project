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
      <TokenDistribution tokenAllocations={tokenAllocations} />
    </main>
  );
}
