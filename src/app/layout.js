import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import { Providers } from "./provider";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const OpenReplayNoSSR = dynamic(() => import("@/components/openReplay"), {
  ssr: false,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body
        id="home"
        className="p-4 px-10 lg:px-40 grid mx-auto font-body"
      >
        <Providers>
          <StructuredData />
          <Header />
          {children}
          <OpenReplayNoSSR />
          <Analytics />
          <SpeedInsights />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://www.michaelhuang.ca"),
  title: {
    default: "Michael Huang — AI-Native Full-Stack Engineer",
    template: "%s | Michael Huang",
  },
  description:
    "AI-native full-stack engineer and consultant. I build production systems that scale — 5× faster with agentic AI workflows. Open to consulting and senior engineering roles.",
  keywords: [
    "full-stack engineer",
    "AI consultant",
    "agentic workflows",
    "Next.js",
    "TypeScript",
    "AWS",
    "Vancouver",
    "SI8 Technology",
  ],
  authors: [{ name: "Michael Huang", url: "https://www.michaelhuang.ca" }],
  creator: "Michael Huang",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.michaelhuang.ca",
    siteName: "Michael Huang",
    title: "Michael Huang — AI-Native Full-Stack Engineer",
    description:
      "AI-native full-stack engineer and consultant. I build production systems that scale — 5× faster with agentic AI workflows.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Michael Huang — AI-Native Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Huang — AI-Native Full-Stack Engineer",
    description:
      "AI-native full-stack engineer and consultant. Building production systems 5× faster with agentic AI workflows.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
