import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white text-center py-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <p className="mb-2">© {new Date().getFullYear()} Elite International School. All rights reserved.</p>
        <p className="text-sm text-gray-200">Address: Example Road, City • Phone: +92-300-119 6030• Email: umarwaqasrajput552@gmail.com</p>
      </div>
    </footer>
  );
}
