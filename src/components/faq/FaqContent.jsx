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
import { useTranslations } from "next-intl";

export default function FaqContent() {
  const t = useTranslations("FaqPage");
  const faqs = [
    {
      question: t("faqCards.card1.title"),
      answer: t("faqCards.card1.content"),
    },
    {
      question: t("faqCards.card2.title"),
      answer: t("faqCards.card2.content"),
    },
    {
      question: t("faqCards.card3.title"),
      answer: t("faqCards.card3.content"),
    },
    {
      question: t("faqCards.card4.title"),
      answer: t("faqCards.card4.content"),
    },
    {
      question: t("faqCards.card5.title"),
      answer: t("faqCards.card5.content"),
    },
    {
      question: t("faqCards.card6.title"),
      answer: t("faqCards.card6.content"),
    },
    {
      question: t("faqCards.card7.title"),
      answer: t("faqCards.card7.content"),
    },
    {
      question: t("faqCards.card9.title"),
      answer: t("faqCards.card9.content"),
    },
  ];

  return (
    <main>
      <PageTitle title={t("h1")} />
      <section className="mx-auto mt-14 flex w-full max-w-full flex-col items-center justify-between gap-12 pb-20 lg:mt-20 lg:flex-row lg:items-start xl:max-w-11/12 2xl:max-w-10/12">
        <article className="flex w-full flex-1 flex-col items-start gap-4">
          <h2 className="mb-3 bg-clip-text text-[clamp(20px,3vw,35px)] font-medium text-white/90">
            {t("h2")}
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
