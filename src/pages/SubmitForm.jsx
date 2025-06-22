import React, { useState } from "react";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    body: ""
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.title || formData.title.length > 80) newErrors.title = "Max 80 characters.";
    if (!formData.body || formData.body.length < 50 || formData.body.length > 1000) newErrors.body = "Body must be 50–1000 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Mock API call with timeout to simulate POST /api/submit-lore
    setTimeout(() => {
      // Simulate success response
      setSuccess(true);
    }, 1000);
  };

  if (success) return <p className="text-green-600">✅ Thank you—your story is under review.</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-white rounded shadow">
      {["name", "email", "title", "body"].map((field) => (
        <div key={field}>
          <label className="block font-serif font-semibold capitalize mb-1 text-[#424242]">{field}</label>
          {field !== "body" ? (
            <input
              type={field === "email" ? "email" : "text"}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
              maxLength={field === "title" ? 80 : undefined}
            />
          ) : (
            <textarea
              rows={5}
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
              minLength={50}
              maxLength={1000}
            />
          )}
          {errors[field] && <p className="text-red-600 text-sm mt-1">{errors[field]}</p>}
        </div>
      ))}
      {errors.form && <p className="text-red-600 text-sm">{errors.form}</p>}
      <button
        type="submit"
        className="bg-[#E91E63] text-white font-serif px-6 py-2 rounded shadow hover:bg-[#c2185b] transition"
      >
        Submit
      </button>
    </form>
  );
};

export default SubmitForm;
