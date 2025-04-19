import React from "react";
import Product from "./Product";
import digitalCard from "@/../public/images/digital-card.jpg";
import autoBot from "@/../public/images/trading-bot.jpg";
import wallet from "@/../public/images/kripto-wallet.jpg";

export default function Products() {
  const productsItem = [
    {
      label: "Digital Card",
      content:
        "QR kod ve dijital bağlantılar sayesinde hızlı, etkili ve modern bir iletişim kurun.",
      image: digitalCard,
    },
    {
      label: "Otomatik Al-Sat Botu",
      content:
        "Belirlediğiniz stratejilere göre 7/24 çalışan otomatik kripto alım-satım botu.",
      image: autoBot,
    },
    {
      label: "Wallet",
      content:
        "Çoklu ağ desteği ile güvenli, kolay kullanılabilir, sıfır teknik bilgi gerektiren cüzdan sistemi.",
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
