import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/ui/lenis-provider";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Truth or Dare Bar | Premium Cocktail Lounge",
  description:
    "Cinematic luxury nightlife destination with craft cocktails, immersive atmosphere, and premium reservations.",
  icons: {
    icon: "/logo-koi-tod.webp",
  },
  openGraph: {
    title: "Truth or Dare Bar | Premium Cocktail Lounge",
    description:
      "Cinematic luxury nightlife destination with craft cocktails, immersive atmosphere, and premium reservations.",
    type: "website",
    locale: "en_NZ",
    siteName: "Truth or Dare Bar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truth or Dare Bar | Premium Cocktail Lounge",
    description:
      "Cinematic luxury nightlife destination with craft cocktails, immersive atmosphere, and premium reservations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#060405] text-white">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
