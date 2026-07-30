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
  title: "FitHuBro — I'm Fit, Are You?",
  description:
    "The 3D fitness platform for gym owners, trainers, and members. AI workout coaching, membership management, and community retention.",
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

