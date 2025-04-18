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
  return (
    <main>
      <PageTitle title={"Sık Sorulan Sorular"} />
      <section className="mx-auto mt-20 flex w-full max-w-10/12 items-start justify-between gap-12 pb-20">
        <article className="flex flex-1 flex-col items-start gap-4">
          <h2 className="mb-3 bg-clip-text text-[clamp(20px,3vw,35px)] font-medium text-white/90">
            Solvex Network hakkında ve blockchain hakkında sık sorulan sorular
          </h2>
          <Accordion className="w-full" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-white">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
        <article className="h-full w-full max-w-[40%] flex-1">
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
