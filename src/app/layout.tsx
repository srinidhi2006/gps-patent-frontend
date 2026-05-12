import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NavAI Core | Patent Showcase",
  description: "Futuristic AI navigation patent showcase dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050816] text-white antialiased selection:bg-cyan-500/30`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
