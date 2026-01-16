import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from "@mantine/core";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " 𝑅@𝐦е𝑠Һ 𝑠ω@𝐦ĩ  ",
  description: "“Breaking news brings the latest updates on current events as they happen, keeping people informed with verified facts and timely reports.”“This report covers a recent local incident, focusing on key details, official statements, and its impact on the community.”“This news highlights recent events and developments that are important for the public. It provides accurate information in a clear and simple manner.”Sports news Technology news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
