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
      <body className={'w-10/12 flex flex-col mx-auto ' + inter.className} >
        <NavBar />
        {children}
      </body>
    </html >
  );
}
