import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pro Badminton World",
  description: "Your ultimate destination for professional badminton.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
