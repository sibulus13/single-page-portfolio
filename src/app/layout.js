import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Huang's Portfolio Page",
  description: "Designed in Figma, built using Next.js, Tailwind CSS, and a moderate dose of GenAI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={'w-10/12 sm:w-4/5 lg:w-3/5 flex flex-col mx-auto ' + inter.className} >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html >
  );
}
