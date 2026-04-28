import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://btehub.vercel.app"),
  title: "Ben Sam Oladoyin | AI & ML Engineer",
  description: "AI & ML Engineer specializing in LLMs, AI Agents, Computer Vision, and Conversational AI. Available for full-time roles globally.",
  keywords: ["AI Engineer", "ML Engineer", "LLM", "AI Agents", "Computer Vision", "Nigeria", "Ben Sam Oladoyin", "BTEHub"],
  authors: [{ name: "Ben Sam Oladoyin" }],
  openGraph: {
    title: "Ben Sam Oladoyin | AI & ML Engineer",
    description: "Building intelligent systems that solve real problems.",
    url: "https://btehub.vercel.app",
    siteName: "Ben Sam Oladoyin",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Sam Oladoyin | AI & ML Engineer",
    description: "AI & ML Engineer | LLMs, Agents, Vision, Chatbots"
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased transition-colors duration-300 noise-overlay">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ben Sam Oladoyin",
              "jobTitle": "AI & ML Engineer",
              "url": "https://btehub.vercel.app",
              "sameAs": [
                "[PLACEHOLDER_LINKEDIN_URL]",
                "[PLACEHOLDER_GITHUB_URL]"
              ]
            })
          }}
        />
        <ThemeProviderWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
