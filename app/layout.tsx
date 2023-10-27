import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Providers from "./_components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abul Chowdhury",
  description: "Abul Chowdhury's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
