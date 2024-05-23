import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";

export const metadata = {
  // metadataBase: new URL(defaultUrl),
  title: "Grattior.xyz - rich web scraping toolkit",
  description: "Find, filter, transform and output your data with ease",
};

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
