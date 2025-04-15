import React from "react";
import ServiceCard from "./serviceCard";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdDomainVerification } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import Threads from "@/components/ui/threadBackground";

const servicesItem = [
  { title: "Kurumsal Doğrulama Sistemi", content: "Bağlantılı iş ve kariyer ağındaki onaylanmış kurumlar aracılığıyla bir profil doğrulama sistemi sağlıyoruz.", icon: MdDomainVerification },
  { title: "Güvenli ve Kullanıcı Dostu Cüzdan", content: "Sıfır teknik bilgi gerektiren çok ağlı desteği olan kullanıcı dostu bir cüzdan.", icon: MdOutlineHealthAndSafety },
  { title: "On/Off-Ramp Platformu", content: "Solvex tokenlerini TL'ye ve TL'yi Solvex jetonlarına dönüştürebileceğiniz entegre bir finansal sistem.", icon: FaPowerOff },
  { title: "Blockchain Tabanlı Akıllı Sözleşme Sistemi", content: "Bağlantılı iş ve kariyer ağında serbest işler için Blockchain tabanlı ödeme ve akıllı sözleşme altyapısı.", icon: SiBlockchaindotcom },
];

export default function Services() {
  return (
    <main className="relative w-full fluid gridContainer mt-32 mb-96 overf">
      <div className="absolute fluid inset-x-0 top-0 min-[1350px]:top-[27rem] overflow-hidden w-full h-full -z-10">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <section className="flex flex-col items-center justify-center gap-16">
        <article className="w-full flex-col items-center justify-center text-center text-transparent bg-gradient-to-t from-black to-white bg-clip-text">
          <h2 className="font-semibold text-[min(3.6vw,50px)]">Servisler</h2>
          <p className="font-base text-[min(1.3vw,18px)] leading-9 text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit cupiditate, corporis reiciendis ea quod repellendus ullam repudiandae iusto magni.
          </p>
        </article>
        <main className="grid grid-cols-1 sm:grid-cols-2 min-[1350px]:!grid-cols-4 gap-8 mx-auto justify-items-stretch">
          {servicesItem.map((item, index) => (
            <ServiceCard key={index} title={item.title} content={item.content} icon={item.icon} />
          ))}
        </main>
      </section>
    </main>
  );
}
