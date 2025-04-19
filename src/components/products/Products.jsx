import React from "react";
import Product from "./Product";
import digitalCard from "@/../public/images/digital-card.jpg";
import autoBot from "@/../public/images/trading-bot.jpg";
import wallet from "@/../public/images/kripto-wallet.jpg";
import { useTranslations } from "next-intl";

export default function Products() {
  const t = useTranslations("ProductPage");
  const productsItem = [
    {
      label: t("productCards.card1.title"),
      content: t("productCards.card1.content"),
      image: digitalCard,
    },
    {
      label: t("productCards.card2.title"),
      content: t("productCards.card2.content"),
      image: autoBot,
    },
    {
      label: t("productCards.card3.title"),
      content: t("productCards.card3.content"),
      image: wallet,
    },
  ];
  return (
    <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {productsItem.map((item, index) => (
        <Product
          key={index}
          label={item.label}
          content={item.content}
          image={item.image}
        />
      ))}
    </section>
  );
}
