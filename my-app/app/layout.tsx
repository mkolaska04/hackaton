import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Space_Grotesk, Source_Code_Pro, Inter } from "next/font/google";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sans = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const code = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Idea2Impact ",
  description:
    "Idea2Impact Hackathon 2026 to wydarzenie na Uniwersytecie Gdańskim, podczas którego uczestnicy wspólnie tworzą innowacyjne projekty i realne rozwiązania. Dołącz i zamień pomysł w realny wpływ.",
  keywords: [
    "hackathon",
    "Idea2Impact",
    "programowanie",
    "technologia",
    "innowacje",
    "2025",
    "wydarzenie",
    "startup",
    "projekty",
    "kreatywność",
    "uniwersytet gdanski",
    "Gdańsk",
    "Polska",
    "uniwersytet gdański",
    "konkurs",
    "programiści",
    "developerzy",
    "aplikacje",
    "software",
    "networking",
    "warsztaty",
    "prezentacje",
    "nagrody",
    "zespoły",
    "collaboration",
    "coding",
    "design",
  ],
  metadataBase: new URL("https://idea2impact.pl"),
  openGraph: {
    title: "Idea2Impact Hackathon 2026",
    description:
    "Idea2Impact Hackathon 2026 to wydarzenie na Uniwersytecie Gdańskim, podczas którego uczestnicy wspólnie tworzą innowacyjne projekty i realne rozwiązania. Dołącz i zamień pomysł w realny wpływ.",
    url: "https://idea2impact.pl",
    siteName: "Idea2Impact",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Idea2Impact Hackathon 2026",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sans.variable} ${code.variable} ${inter.variable}  antialiased flex flex-col`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
