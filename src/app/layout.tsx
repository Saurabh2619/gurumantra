import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

// Font imports
import { Montserrat, Lato } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Guru Mantra",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="flex flex-col min-h-screen font-body">
        <NextTopLoader  color="#2196f3" />
        <main>{children}</main>        
      </body>
    </html>
  );
}
