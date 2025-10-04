import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Elite International School",
  description: "Quality education | Modern facilities | Future ready students"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen bg-gray-300">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
