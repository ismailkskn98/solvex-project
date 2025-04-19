import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import React from "react";

export default function Product({ label, content, image }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {label}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-300"
        >
          {content}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          {image ? (
            <Image
              src={image}
              alt={label}
              width={400}
              height={300}
              className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            />
          ) : (
            <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          )}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
