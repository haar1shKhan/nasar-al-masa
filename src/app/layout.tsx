import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasar Al Masa Technical Services LLC | Precision HVAC & Vertical Mobility",
  description: "Tier-1 certified installation and maintenance of industrial HVAC, central chiller plants, high-speed elevators, and escalators across the UAE.",
  icons: {
    icon: "https://lh3.googleusercontent.com/aida/AEtjO1XIcxJIinhVXFSzw1SNnQcffs7q8__sW8MZF9MxnmGYZB-D9ZLqF4ExuokiHr-gqAV-q9rcANWrNN_cSQlHWswstXzOchx_K8PwuufeM3n5JllXIsjxPX9q9Mqm9CHsQGwTRDSC-JP_NpSIaGWcDiVhzccz069yzO1seNX-Ukr1jrdOvxpvtQeGuon6XKZdHWXT4QgbIEsZxG6IO0biNn_rGquaYer0BzGASz_dFIvVXcc4Sg23KYaKgQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="bg-surface font-sans text-on-surface antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
