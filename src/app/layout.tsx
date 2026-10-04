import type { Metadata, Viewport } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import TransitionProvider from "@/components/transitions/TransitionProvider";
import PageAnimations from "@/components/transitions/PageAnimations";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nasaralmasa.com"),
  title: {
    default: "Nasar Al Masa | Elevators, Escalators & HVAC, UAE",
    template: "%s | Nasar Al Masa",
  },
  description:
    "Nasar Al Masa supplies, installs and maintains elevators, escalators and HVAC systems across the UAE. Sole supplier of FUJI Universal in the Gulf; authorised supplier and installer of GAMI air conditioning.",
  icons: { icon: "/images/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#F2EFE9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables the hidden-until-revealed states in globals.css; without JS everything stays visible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen bg-bone font-sans text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <TransitionProvider />
        <PageAnimations />
      </body>
    </html>
  );
}
