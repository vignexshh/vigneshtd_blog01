import { Providers } from "@/components/provider";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentalSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrumentalSans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.your-site.com"),
  title: {
    template: "%s | Jensen Low",
    default: "Jensen Low",
  },
  description: "Exploring programming and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        instrumentalSans.variable
      )}
    >
      <body className={`${instrumentalSans.variable} font-primary`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
