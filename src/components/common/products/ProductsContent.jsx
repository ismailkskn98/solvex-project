import React from "react";
import PageTitle from "../PageTitle";
import Products from "./Products";

export default function ProductsContent() {
  return (
    <main>
      <PageTitle title="Products" />
      <article className="w-full pb-16">
        <p className="mt-16 mb-8 text-start text-3xl font-medium text-white">
          Blockchain teknolojisini herkes için erişilebilir kılan çözümlerimiz
        </p>
        <Products />
      </article>
    </main>
  );
}
