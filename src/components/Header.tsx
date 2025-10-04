import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Elite International School</h1>
        <p className="mt-2 text-lg">Excellence in Education • Nurturing Global Citizens</p>
        <p className="mt-2 text-sm">Founded & Managed by: <strong>Mr. John Doe</strong></p>
      </div>
    </header>
  );
}
