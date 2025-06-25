import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UX Director Portfolio",
  description: "A portfolio of my work.",
  icons: {
    icon: [
      {
        url: "/facelogo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/facelogo.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    shortcut: "/facelogo.png",
    apple: "/facelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/facelogo.png" />
        <link rel="shortcut icon" href="/facelogo.png" />
        <link rel="apple-touch-icon" href="/facelogo.png" />
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
