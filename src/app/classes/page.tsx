import React from "react";

export default function ClassesPage() {
  const classes = [
    { name: "Playgroup / Nursery", ages: "3–5", description: "Foundation level for early learning and basic skills." },
    { name: "Kindergarten", ages: "5–6", description: "Pre-primary education with emphasis on language and social skills." },
    { name: "Primary (Grade 1–5)", ages: "6–10", description: "Core subjects: English, Math, Science, Social Studies." },
    { name: "Middle (Grade 6–8)", ages: "11–13", description: "Expanded curriculum with labs and project work." },
    { name: "Secondary (Grade 9–10)", ages: "14–15", description: "Matriculation level, exam preparation and practicals." },
    { name: "Higher Secondary (Grade 11–12)", ages: "16–18", description: "Pre-university courses: Science, Commerce, Humanities." }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Classes & Curriculum</h1>
      <p className="text-gray-700 mb-6">We offer classes from early years to higher secondary. Below is a brief overview for each level:</p>

      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-500 mb-2">Ages: {c.ages}</p>
            <p className="text-gray-700">{c.description}</p>
          </div>
        ))}
      </div>

      <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Books & Resources</h2>
        <p className="text-gray-700 leading-relaxed">
          We provide curriculum-aligned textbooks and supplementary resources. The library
          includes international and local titles, and digital resources are available for research.
        </p>
      </section>
    </div>
  );
}
