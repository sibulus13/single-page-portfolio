import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import dynamic from "next/dynamic";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OpenReplayNoSSR = dynamic(() => import('@/components/openReplay'), {
  ssr: false,
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Huang's Portfolio",
  description: "Planned with Notion, designed with Figma, \
  built using Next.js, Tailwind CSS, and a moderate dose of GenAI.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={'px-10 lg:px-40 grid mx-auto ' + inter.className} >
        <Header />
        {children}
        <OpenReplayNoSSR />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html >
  );
}
