import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Archivo({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const display = Newsreader({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rn-bring-the-question.vercel.app"),
  title: "RN Collins — Bring Me the Question",
  description: "I help people see what their business could become—and build the path to get there.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    // Declaring `icons` at all opts out of Next's file-convention detection, so
    // app/apple-icon.png was being generated and served and never linked.
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "RN Collins — Bring Me the Question",
    description: "Research, strategy, and building for people standing at the edge of what is next.",
    siteName: "RN Collins",
    images: [{ url: "https://rn-bring-the-question.rayven-nikkita-colli.chatgpt.site/rn-bring-the-question-thumbnail.png", width: 1672, height: 941, alt: "RN Collins in a commanding editorial portrait using the site’s black, red, blue, and warm-paper palette" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RN Collins — Bring Me the Question",
    description: "Research, strategy, and building for people standing at the edge of what is next.",
    images: ["https://rn-bring-the-question.rayven-nikkita-colli.chatgpt.site/rn-bring-the-question-thumbnail.png"],
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Person", "ProfessionalService"],
  name: "Rayven-Nikkita ‘RN’ Collins",
  alternateName: "RN Collins",
  url: "https://rn-bring-the-question.vercel.app",
  image: "https://rn-bring-the-question.rayven-nikkita-colli.chatgpt.site/rn-collins-portrait.png",
  email: "mailto:collins.ra@northeastern.edu",
  sameAs: ["https://www.linkedin.com/in/rn-collins", "https://rn-selected-work.vercel.app"],
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressLocality: "Honolulu", addressRegion: "HI", addressCountry: "US" },
  knowsAbout: ["qualitative research", "neuroscience", "law", "technology", "strategy", "systems design", "writing", "implementation"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
