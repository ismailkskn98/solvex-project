import React from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">{children}</body>{" "}
    </html>
  );
}
