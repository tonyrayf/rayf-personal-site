import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "RayF",
  description: "Персональный сайт RayF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>RayF</title>
        <meta name="description" content="Персональный сайт RayF" />
      </head>
      <body>
        {children}
      </body>
    </html>
    );
}
