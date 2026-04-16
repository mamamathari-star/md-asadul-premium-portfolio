import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Asadul — Premium Creative-Tech Portfolio",
  description:
    "Premium dark cinematic portfolio of MD Asadul — Brand Identity, UI/UX Design, Frontend Development, and Digital Experience Systems.",
  keywords: [
    "MD Asadul",
    "Frontend Developer",
    "UI/UX Designer",
    "Portfolio",
    "Brand Identity",
    "Creative Developer",
  ],
  authors: [{ name: "MD Asadul" }],
  openGraph: {
    title: "MD Asadul — Premium Creative-Tech Portfolio",
    description:
      "Premium dark cinematic portfolio — Brand Identity, UI/UX Design, Frontend Development.",
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
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-white antialiased grain-overlay">
        {children}
      </body>
    </html>
  );
}
