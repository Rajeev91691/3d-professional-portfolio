import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background3D from "@/components/3d/Background3D";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rajeev Nandan Damarla | AI/ML Engineer & Full Stack Developer",
  description:
    "Passionate AI/ML Engineer and Full Stack Developer specializing in Generative AI, Diffusion Models, and Large Language Models. View my projects and experience.",
  keywords: [
    "AI/ML Engineer",
    "Generative AI",
    "Machine Learning",
    "PyTorch",
    "React",
    "Next.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Rajeev Nandan Damarla" }],
  openGraph: {
    title: "Rajeev Nandan Damarla | AI/ML Engineer & Full Stack Developer",
    description:
      "Passionate AI/ML Engineer and Full Stack Developer specializing in Generative AI, Diffusion Models, and Large Language Models.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Background3D />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}