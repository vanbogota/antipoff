"use client"
import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReduxProvider, MySessionProvider } from "@/components/Providers";

const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>
        <MySessionProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </MySessionProvider>
      </body>
    </html>
  );
}
