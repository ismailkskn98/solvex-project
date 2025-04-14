"use client";
import React from "react";
import { FaEthereum } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function HeroIcons() {
  return (
    <main className="absolute inset-0 w-full h-full overflow-hidden">
      <ParallaxProvider>
        <Parallax speed={-20} className="absolute -bottom-40 left-28">
          <Image src="/images/home/star.svg" width={200} height={200} alt="" className="rotate-6 w-[500px] h-[500px] object-contain" />
        </Parallax>
        <Parallax speed={-20} className="absolute -top-28 -right-64">
          <Image src="/images/home/star.svg" width={200} height={200} alt="" className="rotate-6 w-[600px] h-[600px] object-contain" />
        </Parallax>

        <Parallax speed={-10} className="absolute -top-24 left-0">
          <article className="absolute top-16 left-32 w-28 h-28 icon-hexagon p-1 bg-white/10">
            <div className="w-full h-full flex items-center justify-center icon-hexagon bg-white/15">
              <FaEthereum className="text-white text-[min(10vw,60px)]" />
            </div>
          </article>
          <div className="absolute top-[4.9rem] -left-9 w-[200px] h-[100px]">
            <span className="absolute top-[1.3rem] right-[1.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <span className="absolute top-[2.1rem] right-[1.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <span className="absolute top-[2.8rem] right-[1.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <span className="absolute top-[3.6rem] right-[1.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <Image src="/images/home/line-left-1.svg" alt="" width={200} height={100} className="absolute left-0 top-0" />
            <Image src="/images/home/line-left-2.svg" alt="" width={200} height={100} className="absolute left-0 top-3" />
            <Image src="/images/home/line-left-3.svg" alt="" width={200} height={100} className="absolute left-0 top-6" />
            <Image src="/images/home/line-left-4.svg" alt="" width={200} height={100} className="absolute left-0 top-9" />
          </div>
        </Parallax>
        <Parallax speed={-10} className="absolute -bottom-24 right-0">
          <article className="absolute bottom-16 right-32 w-28 h-28 icon-hexagon p-1 bg-white/10">
            <div className="w-full h-full flex items-center justify-center icon-hexagon bg-white/15">
              <BsCurrencyBitcoin className="text-white text-[min(10vw,60px)]" />
            </div>
          </article>
          <div className="absolute bottom-[2.8rem] -right-1 w-[200px] h-[100px]">
            <span className="absolute bottom-[4.1rem] left-[3.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <span className="absolute bottom-[3.3rem] left-[3.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <span className="absolute bottom-[4.9rem] left-[3.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <span className="absolute bottom-[5.6rem] left-[3.4rem] rounded-[100%] bg-white w-[6px] h-[6px]"></span>
            <Image src="/images/home/line-right-1.svg" alt="" width={200} height={100} className="absolute right-0 bottom-0" />
            <Image src="/images/home/line-right-2.svg" alt="" width={200} height={100} className="absolute right-0 bottom-3" />
            <Image src="/images/home/line-right-3.svg" alt="" width={200} height={100} className="absolute right-0 bottom-6" />
            <Image src="/images/home/line-right-1.svg" alt="" width={200} height={100} className="absolute right-0 bottom-9" />
          </div>
        </Parallax>
      </ParallaxProvider>
    </main>
  );
}
