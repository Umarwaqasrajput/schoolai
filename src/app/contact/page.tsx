import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-4">For admissions and inquiries, contact us:</p>
      <p className="text-gray-700 mb-4">Phone: +92-300-119 6030 • Email: umarwaqasrajput552@gmail.com</p>

      <form className="space-y-4">
        <input className="w-full p-3 border rounded" type="text" placeholder="Your Name" />
        <input className="w-full p-3 border rounded" type="email" placeholder="Your Email" />
        <textarea className="w-full p-3 border rounded" rows={5} placeholder="Message"></textarea>
        <button className="w-full bg-gray-900 text-white p-3 rounded hover:bg-gray-900">Send Message</button>
      </form>
    </div>
  );
}
