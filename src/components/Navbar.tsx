import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-700 text-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          
          <span className="text-xl font-bold">Elite International School</span>
        </Link>

        <div className="hidden md:flex gap-6 items-center bg-gray-900 px-4 py-2 rounded-full">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/classes">Classes</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
