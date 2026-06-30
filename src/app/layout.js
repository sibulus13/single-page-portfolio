import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Providers } from "./provider";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const OpenReplayNoSSR = dynamic(() => import("@/components/openReplay"), {
  ssr: false,
});

const SmoothScrollNoSSR = dynamic(() => import("@/components/SmoothScroll"), {
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
          <SmoothScrollNoSSR />
          <Header />
          {children}
          <OpenReplayNoSSR />
          <Analytics />
          <SpeedInsights />
          <Footer />
        </Providers>
        {/* Mikibot (Pythia) chat widget — standalone Pythia Vercel deploy */}
        <Script
          src="https://pythia-iota.vercel.app/widget.js"
          strategy="afterInteractive"
          data-pythia-api="https://pythia-iota.vercel.app/api/ask"
          data-pythia-site="michaelhuang.ca"
          data-pythia-title="Mikibot"
          data-pythia-contact="https://www.linkedin.com/in/sibulus0/"
          data-pythia-faq="What's Michael's background?|What is he building now?|How can I reach him?"
        />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://www.michaelhuang.ca"),
  title: {
    default: "Michael Huang — AI-Native Full-Stack Engineer & Consultant",
    template: "%s | Michael Huang",
  },
  description:
    "Michael Huang is an AI-native full-stack engineer and AI consultant in Vancouver, BC. Founder of SI8 Technology — building agentic AI, AI automation, and RAG chatbot systems, and shipping production software 2–3× faster with agentic workflows. 6+ years; open to consulting and senior engineering roles.",
  keywords: [
    "Michael Huang",
    "AI-native full-stack engineer",
    "AI engineer Vancouver",
    "AI consultant",
    "agentic AI",
    "AI automation",
    "RAG chatbot",
    "full-stack engineer Vancouver",
    "agentic workflow developer",
    "SI8 Technology",
    "Next.js developer",
    "TypeScript engineer",
    "Claude API developer",
    "AWS CDK consultant",
    "React Native developer",
    "mechatronics engineer",
    "SFU engineering",
    "Traction Complete",
    "LLM integration",
    "software consultant BC",
  ],
  authors: [{ name: "Michael Huang", url: "https://www.michaelhuang.ca" }],
  creator: "Michael Huang",
  alternates: {
    canonical: "https://www.michaelhuang.ca",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.michaelhuang.ca",
    siteName: "Michael Huang",
    title: "Michael Huang — AI-Native Full-Stack Engineer & AI Consultant",
    description:
      "AI engineer in Vancouver, BC building agentic AI, AI automation, and RAG chatbot systems. Founder of SI8 Technology. Ships production software 2–3× faster with agentic workflows.",
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
    title: "Michael Huang — AI-Native Full-Stack Engineer & AI Consultant",
    description:
      "AI engineer in Vancouver building agentic AI, AI automation, and RAG chatbots. Shipping production software 2–3× faster with agentic workflows. Founder of SI8 Technology.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
