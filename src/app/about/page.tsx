import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">About Elite International School</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Elite International School blends traditional values with modern teaching methods.
        We focus on holistic development — academic excellence, critical thinking, creativity,
        and character building. Our curriculum integrates STEM, languages, arts, and physical education.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Mission & Vision</h2>
      <p className="text-gray-700 mb-4">
        Mission: To nurture responsible global citizens equipped with knowledge and skills to lead.
        Vision: To be a center of excellence recognized for outstanding education and innovation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Location & Contact</h2>
      <p className="text-gray-700">
        Address: Example Road, City, Country <br/>
        Phone: +92-300-1234567 <br/>
        Email: info@elite.edu
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Facilities</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Modern Science & Computer Labs</li>
        <li>Extensive Library</li>
        <li>Sports Grounds & Indoor Gym</li>
        <li>Art & Music Studios</li>
        <li>Student Counseling & Career Guidance</li>
      </ul>
    </div>
  );
}
