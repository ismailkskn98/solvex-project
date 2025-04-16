"use client";
import React from "react";
import { FaEthereum } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function HeroIcons() {
  return (
    <main className="absolute inset-0 h-full w-full overflow-hidden">
      <ParallaxProvider>
        <Parallax speed={-20} className="absolute -bottom-40 left-28">
          <Image
            src="/images/home/star.svg"
            width={200}
            height={200}
            alt=""
            className="h-[500px] w-[500px] rotate-6 object-contain"
          />
        </Parallax>
        <Parallax speed={-20} className="absolute -top-28 -right-64">
          <Image
            src="/images/home/star.svg"
            width={200}
            height={200}
            alt=""
            className="h-[600px] w-[600px] rotate-6 object-contain"
          />
        </Parallax>

        <Parallax speed={-10} className="absolute -top-24 left-0">
          <article className="icon-hexagon absolute top-16 left-32 h-20 w-20 bg-white/10 p-1">
            <div className="icon-hexagon flex h-full w-full items-center justify-center bg-white/15">
              <FaEthereum className="text-[min(8vw,35px)] text-white" />
            </div>
          </article>
          <div className="absolute top-[4.3rem] -left-10 h-[100px] w-[200px]">
            <span className="absolute top-[1.4rem] right-[1.4rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <span className="absolute top-[1.9rem] right-[1.4rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <span className="absolute top-[2.4rem] right-[1.4rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <span className="absolute top-[2.9rem] right-[1.4rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <Image
              src="/images/home/line-left-1.svg"
              alt=""
              width={200}
              height={100}
              className="absolute top-0 left-0"
            />
            <Image
              src="/images/home/line-left-2.svg"
              alt=""
              width={200}
              height={100}
              className="absolute top-2 left-0"
            />
            <Image
              src="/images/home/line-left-3.svg"
              alt=""
              width={200}
              height={100}
              className="absolute top-4 left-0"
            />
            <Image
              src="/images/home/line-left-4.svg"
              alt=""
              width={200}
              height={100}
              className="absolute top-6 left-0"
            />
          </div>
        </Parallax>
        <Parallax speed={-10} className="absolute right-0 -bottom-24">
          <article className="icon-hexagon absolute right-32 bottom-16 h-20 w-20 bg-white/10 p-1">
            <div className="icon-hexagon flex h-full w-full items-center justify-center bg-white/15">
              <BsCurrencyBitcoin className="text-[min(8vw,35px)] text-white" />
            </div>
          </article>
          <div className="absolute -right-1 bottom-[2.2rem] h-[100px] w-[200px]">
            <span className="absolute bottom-[5rem] left-[3.7rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <span className="absolute bottom-[4.5rem] left-[3.7rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <span className="absolute bottom-[4rem] left-[3.7rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <span className="absolute bottom-[3.5rem] left-[3.7rem] h-[4px] w-[4px] rounded-[100%] bg-white"></span>
            <Image
              src="/images/home/line-right-1.svg"
              alt=""
              width={200}
              height={100}
              className="absolute right-0 bottom-0"
            />
            <Image
              src="/images/home/line-right-2.svg"
              alt=""
              width={200}
              height={100}
              className="absolute right-0 bottom-2"
            />
            <Image
              src="/images/home/line-right-3.svg"
              alt=""
              width={200}
              height={100}
              className="absolute right-0 bottom-4"
            />
            <Image
              src="/images/home/line-right-1.svg"
              alt=""
              width={200}
              height={100}
              className="absolute right-0 bottom-6"
            />
          </div>
        </Parallax>
      </ParallaxProvider>
    </main>
  );
}
