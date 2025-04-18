"use client";
import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
import { BsPersonVcard } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";

export default function CustomInput(props) {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [field, meta] = useField(props.name);

  return (
    <div className="relative w-full">
      <input
        {...props}
        {...field}
        onFocus={() => setIsFocusInput(true)}
        onBlur={(e) => {
          setIsFocusInput(false);
          field.onBlur(e);
        }}
        className={classNames(
          "py-10px w-full rounded-[3px] border border-solid bg-transparent py-3 pr-8 pl-3 text-sm text-white/90",
          {
            "focus:outline-light-f88540/30 border-white/10 focus:outline-1":
              !meta.error,
            "border-red-500 focus:outline-none": meta.error,
          },
        )}
      />
      {meta.touched && meta.error ? (
        <div className="absolute -bottom-5 left-[2px] z-10 text-xs text-red-500">
          *{meta.error}
        </div>
      ) : null}
      <div
        className={classNames(
          "pointer-events-none absolute rounded-[3px] px-1 py-1 text-sm transition-all duration-300",
          {
            "bg-light-EAEEFE -top-[11px] left-1 bg-black text-[10px] text-white":
              isFocusInput || (!isFocusInput && field.value.length),
            "top-1/2 left-2 -translate-y-1/2 bg-transparent text-sm text-white/70":
              !isFocusInput && !field.value.length,
          },
        )}
      >
        {props.label}
      </div>
      <span className="absolute top-1/2 right-2 -translate-y-1/2">
        {props.name === "name" ? (
          <BsPersonVcard
            className={classNames("", {
              "text-red-500": meta.error && meta.touched,
              "text-zinc-400": !meta.error && !meta.touched,
            })}
          />
        ) : (
          <FiAtSign
            className={classNames("", {
              "text-red-500": meta.error && meta.touched,
              "text-zinc-400": !meta.error && !meta.touched,
            })}
          />
        )}
      </span>
    </div>
  );
}
