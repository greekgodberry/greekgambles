import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreekGambles | Live Gambling Streams, Big Wins & Bonuses",
  description:
    "GreekGambles is the home of Greek God Berry’s live Kick streams, big wins, bonus buys, gambling clips, Discord community, and exclusive bonus offers.",
  keywords: [
    "GreekGambles",
    "Greek God Berry",
    "Kick streamer",
    "gambling streamer",
    "casino streams",
    "slots",
    "keno",
    "Lockly bonus",
    "GREEK33",
  ],
  openGraph: {
    title: "GreekGambles",
    description:
      "Live streams, big wins, bonus buys, clips, and the GreekGambles community.",
    url: "https://greekgambles.com",
    siteName: "GreekGambles",
    images: [
      {
        url: "/hero-wide.png",
        width: 1200,
        height: 630,
        alt: "GreekGambles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreekGambles",
    description:
      "Live streams, big wins, bonus buys, clips, and the GreekGambles community.",
    images: ["/hero-wide.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}