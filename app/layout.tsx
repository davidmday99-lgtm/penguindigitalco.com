import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Penguin Digital Co | Web Design & SEO Management",
  description: "Custom web design and ongoing SEO management. Look sharp, get found, and build your next chapter with Penguin Digital Co.",
  robots: { index: true, follow: true },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
