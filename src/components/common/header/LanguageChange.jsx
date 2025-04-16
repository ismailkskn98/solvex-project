"use client";
import React, { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageChange() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const handleLocaleChange = (lang) => {
    startTransition(() => router.push(pathname, { locale: lang }));
  };

  return (
    <Select
      defaultValue={locale}
      onValueChange={(lang) => handleLocaleChange(lang)}
    >
      <SelectTrigger className="w-fit cursor-pointer border-none px-2 text-sm text-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="tr"
          className="flex cursor-pointer items-center justify-center gap-1"
        >
          <Image
            src="https://flagcdn.com/24x18/tr.png"
            alt="Türkçe"
            width={24}
            height={18}
            className="h-3 w-4 object-cover lg:h-[18px] lg:w-6"
          />
          <span className="text-sm">Türkçe</span>
        </SelectItem>
        <SelectItem
          value="en"
          className="flex cursor-pointer items-center justify-center gap-1"
        >
          <Image
            src="https://flagcdn.com/24x18/us.png"
            alt="English"
            width={24}
            height={18}
            className="h-3 w-4 object-cover lg:h-[18px] lg:w-6"
          />
          <span className="text-sm">English</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
