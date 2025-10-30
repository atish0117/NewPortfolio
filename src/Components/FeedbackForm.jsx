import React, { useState } from "react";
import { databases, storage, ID } from "../utils/appwriteConfig";
import {
  DATABASE_ID,
  Feedback_COLLECTION_ID,
  BUCKET_ID,
} from "../utils/appwriteConfig";
import toast from "react-hot-toast";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    testimonial: "",
    name: "",
    designation: "",
    company: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // handle image change
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setErrors({ ...errors, imageFile: "" });
  };

  // validation
  const validateForm = () => {
    const newErrors = {};
    if (!form.testimonial) newErrors.testimonial = "Testimonial is required";
    if (!form.name) newErrors.name = "Name is required";
    if (!form.designation) newErrors.designation = "Designation is required";
    if (!form.company) newErrors.company = "Company is required";
    if (!imageFile) newErrors.imageFile = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Uploading feedback...", { id: "submitToast" });

      // upload image to Appwrite Storage
      const file = await storage.createFile(BUCKET_ID, ID.unique(), imageFile);
      const imageUrl = storage.getFileView(BUCKET_ID, file.$id);

      // store feedback in database
      await databases.createDocument(
        DATABASE_ID,
        Feedback_COLLECTION_ID,
        ID.unique(),
        {
          testimonial: form.testimonial,
          name: form.name,
          designation: form.designation,
          company: form.company,
          image: imageUrl,
        }
      );

      toast.success("Feedback submitted successfully!", { id: "submitToast" });
      setForm({ testimonial: "", name: "", designation: "", company: "" });
      setImageFile(null);
      setErrors({});
    } catch (error) {
      console.error("Submission failed", error);
      toast.error("Failed to submit feedback.", { id: "submitToast" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-xl shadow-md flex flex-col gap-4 w-full max-w-4xl mx-auto md:px-10 sm:px-6 px-4"
      aria-labelledby="feedback-form-title"
    >
      <h2
        id="feedback-form-title"
        className="text-xl font-semibold text-white text-center"
      >
        Submit Your Feedback
      </h2>

      {/* Testimonial */}
      <label htmlFor="testimonial" className="text-white font-medium">
        Your Testimonial
      </label>
      <textarea
        id="testimonial"
        name="testimonial"
        placeholder="Write your feedback..."
        className={`bg-black-200 p-3 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
          errors.testimonial ? "border border-red-500" : ""
        }`}
        rows={4}
        value={form.testimonial}
        onChange={handleChange}
        aria-invalid={!!errors.testimonial}
      />
      {errors.testimonial && (
        <p className="text-red-400 text-sm">{errors.testimonial}</p>
      )}

      {/* Name, Designation, Company, Image */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="name" className="text-white font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
              errors.name ? "border border-red-500" : ""
            }`}
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          <label htmlFor="image" className="text-white font-medium">
            Upload Your Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
              errors.imageFile ? "border border-red-500" : ""
            }`}
            aria-invalid={!!errors.imageFile}
          />
          {errors.imageFile && (
            <p className="text-red-400 text-sm">{errors.imageFile}</p>
          )}
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="designation" className="text-white font-medium">
            Designation
          </label>
          <input
            id="designation"
            name="designation"
            type="text"
            placeholder="Your designation"
            className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
              errors.designation ? "border border-red-500" : ""
            }`}
            value={form.designation}
            onChange={handleChange}
            aria-invalid={!!errors.designation}
          />
          {errors.designation && (
            <p className="text-red-400 text-sm">{errors.designation}</p>
          )}

          <label htmlFor="company" className="text-white font-medium">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company"
            className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
              errors.company ? "border border-red-500" : ""
            }`}
            value={form.company}
            onChange={handleChange}
            aria-invalid={!!errors.company}
          />
          {errors.company && (
            <p className="text-red-400 text-sm">{errors.company}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`
          relative flex items-center justify-center
          px-6 py-2 rounded-lg
          font-medium text-white text-sm
          transition-all duration-200
          ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-tertiary active:scale-95"}
          shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-tertiary
        `}
        aria-label="Submit your feedback"
      >
        {loading ? (
          <div className="h-5 w-5 border-2 border-black-100 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit Feedback"
        )}
      </button>
    </form>
  );
};

export default FeedbackForm;
