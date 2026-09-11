import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/ui-kit/Preloader";

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontDisplay = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitHuBro — Gym Management Software & Fitness SaaS",
  description:
    "The all-in-one multi-tenant gym management platform. QR attendance, memberships, payments, leads CRM, trainer portal, and AI workout delivery.",
  keywords: [
    "gym management software",
    "gym software india",
    "gym attendance qr code",
    "gym membership software",
    "trainer software",
    "fithubro"
  ],
  openGraph: {
    title: "FitHuBro — Gym Management Software & Fitness SaaS",
    description:
      "The all-in-one multi-tenant gym management platform. QR attendance, memberships, payments, leads CRM, trainer portal, and AI workout delivery.",
    url: "https://fithubro.com",
    siteName: "FitHuBro",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontDisplay.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden font-body bg-background text-foreground">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
