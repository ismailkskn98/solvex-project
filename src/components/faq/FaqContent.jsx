import React from "react";
import PageTitle from "../common/PageTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import faqImage from "@/../public/images/faq-image3.webp";

export default function FaqContent() {
  const faqs = [
    {
      question: "Solvex Wallet nedir?",
      answer:
        "Solvex Wallet, teknik bilgi gerektirmeden farklı blokzincir ağlarını destekleyen kullanıcı dostu bir cüzdandır.",
    },
    {
      question: "Cüzdanı kullanmak için teknik bilgiye ihtiyacım var mı?",
      answer:
        "Hayır, Solvex Wallet herkesin kolayca kullanabileceği şekilde tasarlanmıştır. Teknik bilgi gerekmeden işlem yapabilirsiniz.",
    },
    {
      question: "Solvex Token'ı Türk Lirasına çevirebilir miyim?",
      answer:
        "Evet. Geliştirilen On/Off-Ramp platformu sayesinde Solvex tokenlarını Türk Lirasına çevirebilir, TL ile token satın alabilirsiniz.",
    },
    {
      question: "Solvex Network doğrulama sistemi nasıl çalışır?",
      answer:
        "Kurumsal Doğrulama Sistemi, iş ve kariyer ağına bağlı onaylı kurumlar aracılığıyla kullanıcı profillerinin doğrulanmasını sağlar.",
    },
    {
      question: "Akıllı kontrat sistemi ne amaçla kullanılıyor?",
      answer:
        "Freelance işler için güvenli ödeme ve sözleşme altyapısı sağlar. Taraflar arasında şeffaf ve otomatik bir süreç sunar.",
    },
    {
      question: "Toplam Solvex token arzı nedir?",
      answer:
        "Toplam arz 100 milyon adettir. Bunun %50’si kalıcı olarak yakılmıştır. Geri kalan kısmı çeşitli alanlara ayrılmıştır.",
    },
    {
      question: "Solvex platformunun yol haritasında neler var?",
      answer:
        "Yol haritasında cüzdan geliştirmeleri, çoklu ağ desteği, fiat entegrasyonu ve iş/kariyer ağı platformu gibi adımlar yer alıyor.",
    },
    {
      question: "Akıllı kontratlarınız denetlendi mi?",
      answer:
        "Evet, akıllı kontratlarımız Certik tarafından denetlenmiştir. Raporu <a href='certik-audit-link' target='_blank' rel='noopener noreferrer'>buradan</a> inceleyebilirsiniz.",
    },
    {
      question: "Token arzının bir kısmı yakıldı mı?",
      answer:
        "Evet, toplam arzın %50'si kalıcı olarak yakılmıştır. Yakım adresine <a href='burn-wallet-address-link' target='_blank' rel='noopener noreferrer'>buradan</a> ulaşabilirsiniz.",
    },
  ];

  return (
    <main>
      <PageTitle title={"Sık Sorulan Sorular"} />
      <section className="mx-auto mt-14 flex w-full max-w-full flex-col items-center justify-between gap-12 pb-20 lg:mt-20 lg:flex-row lg:items-start xl:max-w-11/12 2xl:max-w-10/12">
        <article className="flex w-full flex-1 flex-col items-start gap-4">
          <h2 className="mb-3 bg-clip-text text-[clamp(20px,3vw,35px)] font-medium text-white/90">
            Solvex ile ilgili sıkça sorulan sorular
          </h2>
          <Accordion className="w-full" type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </article>
        <article className="h-full w-full max-w-full flex-1 lg:max-w-[40%]">
          <Image
            src={faqImage}
            alt="solvex sık sorulan sorular resim"
            width={700}
            height={600}
            quality={100}
            className="h-[450px] object-contain object-center"
            placeholder="blur"
            blurDataURL={faqImage.blurDataURL}
          />
        </article>
      </section>
    </main>
  );
}
