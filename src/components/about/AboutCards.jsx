import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

export default function AboutCards() {
  const offerings = [
    {
      title: "Kurumsal Doğrulama Sistemi",
      description:
        "İş ve kariyer ağına entegre edilmiş, onaylı kurumlar aracılığıyla gerçekleştirilen profil doğrulama sistemi.",
    },
    {
      title: "Güvenli ve Kullanıcı Dostu Cüzdan",
      description:
        "Sıfır teknik bilgiyle kullanılabilen, çoklu ağ destekli modern bir kripto cüzdan.",
    },
    {
      title: "On/Off-Ramp Platformu",
      description:
        "Solvex token’ları Türk Lirası’na (TL) ve TL’yi Solvex token’lara dönüştürebileceğiniz entegre finansal altyapı.",
    },
    {
      title: "Akıllı Kontrat Sistemi",
      description:
        "Freelance işler için blockchain tabanlı ödeme ve akıllı kontrat altyapısı.",
    },
  ];

  return (
    <div className="relative z-50 mx-auto w-full max-w-10/12">
      <h2 className="text-[clamp(23px,4vw,40px)] font-medium text-white">
        Ne Sunuyoruz?
      </h2>
      <HoverEffect items={offerings} />
    </div>
  );
}
