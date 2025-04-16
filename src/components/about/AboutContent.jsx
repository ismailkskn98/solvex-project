import React from "react";
import SplineDesing from "./SplineDesing";

export default function AboutContent() {
  return (
    <main className="mx-auto flex min-h-[400px] w-full max-w-10/12 items-center justify-between text-white">
      <section className="flex flex-1 flex-col items-start">
        <h2>Burası H2</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          dolorum harum animi ea ut vel exercitationem rem sapiente non
          similique nesciunt voluptatem molestias, velit laudantium, qui
          doloribus tempore fugiat corrupti atque odit veritatis, facilis
          officia repudiandae? Minus dolor nisi aspernatur?
        </p>
      </section>
      <section className="relative h-full w-full flex-1">
        <SplineDesing />
      </section>
    </main>
  );
}
