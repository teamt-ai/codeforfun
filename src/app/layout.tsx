import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeForFun 🚀 | Learn HTML for Kids 5-10 Years Old",
  description: "Learn HTML from scratch with fun Lego analogies, interactive fill-in-the-blanks challenges, and live coding playgrounds!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Quicksand:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-purple-300 selection:text-purple-950">
        {children}
      </body>
    </html>
  );
}
