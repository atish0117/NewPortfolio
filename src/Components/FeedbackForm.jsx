import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.testimonial &&
      form.name &&
      form.designation &&
      form.company &&
      form.image
    ) {
      onSubmit?.(form);
      setForm({
        testimonial: "",
        name: "",
        designation: "",
        company: "",
        image: "",
      });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1a1a1a] p-6 rounded-xl shadow-md flex flex-col gap-4 max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold text-white">Submit Your Feedback</h2>

      <textarea
        name="testimonial"
        placeholder="Your testimonial..."
        className="bg-gray-800 p-3 rounded-md text-sm text-white"
        rows={4}
        value={form.testimonial}
        onChange={handleChange}
      />

      <input
        name="name"
        type="text"
        placeholder="Your name"
        className="bg-gray-800 p-2 rounded-md text-sm text-white"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="designation"
        type="text"
        placeholder="Your designation"
        className="bg-gray-800 p-2 rounded-md text-sm text-white"
        value={form.designation}
        onChange={handleChange}
      />

      <input
        name="company"
        type="text"
        placeholder="Your company"
        className="bg-gray-800 p-2 rounded-md text-sm text-white"
        value={form.company}
        onChange={handleChange}
      />

      <input
        name="image"
        type="text"
        placeholder="Image URL"
        className="bg-gray-800 p-2 rounded-md text-sm text-white"
        value={form.image}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium text-white"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
