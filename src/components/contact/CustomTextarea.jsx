"use client";
import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
import { FiMessageSquare } from "react-icons/fi";

export default function CustomTextarea(props) {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [field, meta] = useField(props.name);
  return (
    <div className="relative">
      <textarea
        {...props}
        {...field}
        onFocus={() => setIsFocusInput(true)}
        onBlur={(e) => {
          setIsFocusInput(false);
          field.onBlur(e);
        }}
        rows={8}
        className={classNames(
          "py-10px w-full resize-none rounded-md border border-solid bg-transparent py-2 pr-8 pl-3 text-sm text-white/90 focus:outline-1",
          {
            "focus:outline-light-f88540/30 border-white/10 focus:outline-1":
              !meta.error,
            "border-red-500 focus:outline-none": meta.error,
          },
        )}
      />
      {meta.touched && meta.error ? (
        <div className="absolute -bottom-4 left-[2px] text-xs text-red-600">
          *{meta.error}
        </div>
      ) : null}
      <div
        className={classNames(
          "pointer-events-none absolute rounded-md px-1 py-1 text-sm transition-all duration-300",
          {
            "bg-light-EAEEFE -top-[11px] left-1 bg-black text-[10px] text-white/80":
              isFocusInput || (!isFocusInput && field.value.length),
            "top-4 left-2 bg-transparent text-sm text-white/70":
              !isFocusInput && !field.value.length,
          },
        )}
      >
        {props.label}
      </div>
      <span className="absolute top-4 right-2">
        {
          <FiMessageSquare
            className={classNames("", {
              "text-red-500": meta.error && meta.touched,
              "text-zinc-400": !meta.error && !meta.touched,
            })}
          />
        }
      </span>
    </div>
  );
}
