import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* Top section: left text, right image */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Elite International School</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Elite International School is committed to delivering high-quality education
            that prepares students for a global future. We combine modern curriculum,
            experienced faculty, and well-equipped facilities to foster academic excellence
            and personal growth.
          </p>

          <div className="mt-4">
            <p className="text-sm text-gray-600">Founded & Managed by: <strong>Mr. John Doe</strong></p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/1.jpg"
            alt="School Main"
            width={520}
            height={360}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Blue banner */}
      <section className="bg-red-600 text-white text-center py-10 mt-8">
        <h2 className="text-3xl font-extrabold">Education for a Global Future</h2>
        <p className="mt-3 max-w-3xl mx-auto">
          Our mission is to empower students with knowledge, skills, and values to thrive in the 21st century.
        </p>
      </section>

      {/* Bottom image */}
      
      
    </div>
  );
}
