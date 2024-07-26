import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import dynamic from "next/dynamic";
import Head from "next/head";
import { Providers } from "./provider";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OpenReplayNoSSR = dynamic(() => import('@/components/openReplay'), {
  ssr: false,
})

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <body id='home' className={'p-4 px-10 lg:px-40 grid mx-auto scroll-p-44' + inter.className} >
        <Providers>
          <Header />
          {children}
          <OpenReplayNoSSR />
          <Analytics />
          <SpeedInsights />
          <Footer />
        </Providers>
      </body>
    </html >
  );
}

export const metadata = {
  title: "Michael Huang's Portfolio",
  description: "Planned with Notion, designed with Figma, \
  built using Next.js, styled using Tailwind CSS, and created with the help of a moderate dose of ChatGPT.",
};