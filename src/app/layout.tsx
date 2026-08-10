import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingChat from "@/components/FloatingChat";
import N8nChat from "@/components/N8nChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amazesst",
  description: "The Profit-First Amazon Agency. We scale brands on Amazon without killing your profits — more revenue, more margins, no guesswork.",
  keywords: ["Amazon Growth Agency", "Amazon SEO", "Amazon PPC", "Brand Scaling", "Amazesst", "AEO", "GEO"],
  authors: [{ name: "Hur Jaffri", url: "https://amazesst.com" }],
  openGraph: {
    title: "Amazesst | The Profit-First Amazon Agency",
    description: "We scale brands on Amazon without killing your profits.",
    url: "https://amazesst.com",
    siteName: "Amazesst",
    images: [{ url: "/images/logo.png" }],
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans bg-black text-white`} suppressHydrationWarning>
        {children}
        <FloatingChat />
        <N8nChat />
      </body>
    </html>
  );
}
