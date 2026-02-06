import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equiman - Trading Courses Portfolio",
  description: "Learn trading with expert courses from Equiman",
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

