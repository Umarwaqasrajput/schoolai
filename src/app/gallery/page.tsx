"use client";
import Image from "next/image";
import React from "react";

export default function GalleryPage() {
  const images = [
    "/4.jpg",
    "/2.jpg",
    "/3.jpg",
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div key={i} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
