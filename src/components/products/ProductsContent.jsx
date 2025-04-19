import React from "react";
import PageTitle from "../common/PageTitle";
import Products from "./Products";
import { useTranslations } from "next-intl";

export default function ProductsContent() {
  const t = useTranslations("ProductPage");
  return (
    <main>
      <PageTitle title={t("h1")} />
      <article className="w-full pb-16">
        <p
          id="products"
          className="mt-16 mb-8 text-start text-3xl font-medium text-white"
        >
          {t("subtitle")}
        </p>
        <Products />
      </article>
    </main>
  );
}
