// app/page.tsx
import type { Metadata } from "next";
import { faqData, tabs } from "@/utils/context";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: " Mizo AI | Marketing Agent",
  description: "Find answers to common questions about the Marketing Agent, pricing, credits, billing, and safety.",
  keywords: [
    "marketing agent",
    "AI marketing",
    "social media automation",
    "AI content generator for social media",
    "marketing automation for startups",
  ],
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mizo AI",
    description: "Find answers to common questions about the Mizo-AI Marketing Agent.",
    url: "https://yourdomain.com/",
    siteName: "Mizo AI",
    images: [
      {
        url: "/mizo_logo.png",
        width: 1200,
        height: 630,
        alt: "Mizo AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizo AI",
    description: "All your questions answered.",
    images: ["/mizo_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index:true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    }
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 to-white px-4 py-12">
      <FAQClient tabs={tabs} faqData={faqData} />
    </main>
  );
}
