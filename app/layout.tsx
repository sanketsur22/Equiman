import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://equiman.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Equiman",
    template: "%s | Equiman",
  },
  description: "sanu",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Equiman",
    title: "Equiman",
    description: "sanu",
    images: [
      {
        url: "/images/funnel.png",
        width: 1200,
        height: 630,
        alt: "Equiman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equiman",
    description: "sanu",
    images: ["/images/funnel.png"],
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

