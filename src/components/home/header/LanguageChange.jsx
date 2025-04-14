import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LanguageChange() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Dil" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="tr">Türkçe</SelectItem>
        <SelectItem value="en">İngilizce</SelectItem>
      </SelectContent>
    </Select>
  );
}
