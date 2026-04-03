import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programa Founding Clients — Z-PAY · ZETTA Ecosystem",
  description:
    "Documento técnico e comercial do programa de acesso restrito à Z-PAY — a camada de orquestração de pagamentos do ecossistema ZETTA.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
