import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Openreplay from "@/components/openReplay";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Huang's Portfolio",
  description: "Planned with Notion, designed with Figma, \
  built using Next.js, Tailwind CSS, and a moderate dose of GenAI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={'w-10/12 sm:w-4/5 lg:w-3/5 flex flex-col mx-auto ' + inter.className} >
        <Header />
        {children}
        <Openreplay />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html >
  );
}
