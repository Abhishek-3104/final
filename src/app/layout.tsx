// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"; // Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WasteSmart - Smart Waste Management",
  description: "Optimize waste collection and management with WasteSmart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Add the Toaster component here */}
        <Toaster 
          theme="dark" 
          position="top-right" 
          richColors 
          toastOptions={{
            style: {
              background: "#2d3748",
              border: "1px solid rgba(74, 85, 104, 0.5)",
            },
          }}
        />
      </body>
    </html>
  );
}