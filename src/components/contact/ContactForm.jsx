"use client";
import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("ContactPage");

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, t("form.name.validation.minLength", { min: 3 }))
      .required(t("form.name.validation.required")),
    email: Yup.string()
      .email(t("form.email.validation.email"))
      .matches(/^[^@]+@[^@]+\.[^@]+$/, t("form.email.validation.email"))
      .required(t("form.email.validation.required")),
    message: Yup.string()
      .min(10, t("form.message.validation.minLength", { min: 10 }))
      .required(t("form.message.validation.required")),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const baseURL = window.location.origin;
      console.log(values);
      const apiURL = `${baseURL}/api/contact-form`;
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Form gönderilirken hata oluştu");
      }
      const data = await response.json();

      if (!data.status) {
        throw new Error("Form gönderilirken hata oluştu");
      }
      actions.resetForm();
      toast.success("Mesajınız iletilmiştir. Teşekkürler!");
    } catch (error) {
      console.log(error.stack);
      toast.error("Sunucuda Bir hata oluştu.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className="flex w-full flex-col gap-y-7 md:gap-y-9">
          <CustomInput
            name="name"
            type="text"
            id="name"
            label={t("form.name.label")}
          />
          <CustomInput
            name="email"
            label={t("form.email.label")}
            type="email"
            id="email"
          />
          <CustomTextarea
            name="message"
            label={t("form.message.label")}
            id="message"
          />
          <button
            className={`-mt-4 w-min self-center rounded-sm px-3 py-3 text-sm font-medium text-nowrap transition-colors duration-200 ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-400 text-gray-700"
                : "bg-logo hover:bg-deep-night cursor-pointer text-white"
            }`}
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Gönderiliyor..." : t("form.button")}
          </button>
        </Form>
      )}
    </Formik>
  );
}
