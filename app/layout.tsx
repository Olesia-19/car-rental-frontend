import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanstackProvider/TanstackProvider";
import Header from "@/components/Header/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Car Rental App",
  description: "A modern platform for renting cars easily and conveniently.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Car Rental App",
    description:
      "Find and rent the perfect car for any trip — quick, simple, reliable.",
    url: "",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Car Rental App Promo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
