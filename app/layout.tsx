import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

const titre = "Fantômes : débusque les abonnements que tu paies sans t'en servir";
const description =
  "Dépose ton relevé bancaire : on repère les prélèvements oubliés et on rédige les lettres de résiliation. 19 € une fois.";

export const metadata: Metadata = {
  title: titre,
  description,
  openGraph: { title: titre, description, locale: "fr_FR", type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmsans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
