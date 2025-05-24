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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setErrors({ ...errors, imageFile: "" });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Uploading feedback...", { id: "submitToast" });

      const file = await storage.createFile(BUCKET_ID, ID.unique(), imageFile);
      const imageUrl = storage.getFileView(BUCKET_ID, file.$id);
        console.log("image", imageUrl);
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
      setForm({ testimonial: "", name: "", designation: "", company: "", image:"" });
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
  className=" p-6 rounded-xl shadow-md flex flex-col gap-4 w-full max-w-4xl mx-auto md:px-10 sm:px-6 px-4"
>
  <h2 className="text-xl font-semibold text-white text-center">
    Submit Your Feedback
  </h2>

  {/* Testimonial Textarea */}
  <textarea
    name="testimonial"
    placeholder="Your testimonial..."
    className={`bg-black-200 p-3 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
      errors.testimonial ? "border border-red-500" : ""
    }`}
    rows={4}
    value={form.testimonial}
    onChange={handleChange}
  />
  {errors.testimonial && (
    <p className="text-red-400 text-sm">{errors.testimonial}</p>
  )}

  {/* Input Fields Section */}
  <div className="flex flex-col md:flex-row w-full justify-between gap-4">
    {/* Left Section: Name & Image Upload */}
    <div className="flex flex-col gap-4 w-full">
      <input
        name="name"
        type="text"
        placeholder="Your name"
        className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
          errors.name ? "border border-red-500" : ""
        }`}
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
          errors.imageFile ? "border border-red-500" : ""
        }`}
      />
      {errors.imageFile && (
        <p className="text-red-400 text-sm">{errors.imageFile}</p>
      )}
    </div>

    {/* Right Section: Designation & Company */}
    <div className="flex flex-col gap-4 w-full">
      <input
        name="designation"
        type="text"
        placeholder="Your designation"
        className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
          errors.designation ? "border border-red-500" : ""
        }`}
        value={form.designation}
        onChange={handleChange}
      />
      {errors.designation && (
        <p className="text-red-400 text-sm">{errors.designation}</p>
      )}

      <input
        name="company"
        type="text"
        placeholder="Your company"
        className={`bg-black-200 p-2 rounded-md text-sm text-white placeholder:text-secondary placeholder:opacity-60 ${
          errors.company ? "border border-red-500" : ""
        }`}
        value={form.company}
        onChange={handleChange}
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
    shadow-md hover:shadow-lg
  `}
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
