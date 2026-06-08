import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PK Photography Uganda | Wedding & Event Photography in Jinja",
  description:
    "Professional wedding, event & portrait photography in Jinja, Uganda. PK Photography captures life's most beautiful moments with cinematic elegance.",
  keywords: [
    "photography Uganda",
    "wedding photographer Jinja",
    "event photography",
    "PK Photography",
    "Uganda photographer",
    "videography Jinja",
    "portrait photography Uganda",
  ],
  openGraph: {
    title: "PK Photography Uganda | Wedding & Event Photography",
    description:
      "Professional photography and videography services based in Jinja, Uganda. Specializing in weddings, events, and portraits.",
    type: "website",
    locale: "en_UG",
    siteName: "PK Photography Uganda",
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
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}
