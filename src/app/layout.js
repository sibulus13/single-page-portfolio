import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Huang's Portfolio Page",
  description: "Designed in Figma, created using Next.js, Tailwind CSS, and GenAI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ width: '80%', fontSize: '12px' }}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
