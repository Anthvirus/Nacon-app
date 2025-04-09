import { useState } from "react";

export default function TrackingContent() {
  const [formData, setFormData] = useState({
    numText: "",
    option: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your logic here
  };

  return (
    <section className="w-full min-h-screen bg-[var(--Secondary)] flex flex-col items-center justify-center service-page">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-6 w-full mx-4 max-w-md bg-[var(--Primary)] text-[var(--Accent)] shadow-lg rounded-2xl"
      >
        {/* Number/Text Input */}
        <div className="flex flex-col gap-1">
          <label htmlFor="numText" className="font-semibold text-lg">
            Tracking ID
          </label>
          <input
            type="text"
            name="numText"
            id="numText"
            value={formData.numText}
            onChange={handleChange}
            placeholder="Enter tracking number"
            className="p-3 rounded-xl bg-[var(--Primary)] text-[var(--Accent)] border border-[var(--Accent)] focus:outline-none focus:ring-2 focus:ring-[var(--Accent)]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="option" className="font-semibold text-lg">
            Choose an Option
          </label>
          <select
            name="option"
            id="option"
            value={formData.option}
            onChange={handleChange}
            className="p-3 rounded-xl bg-[var(--Primary)] text-[var(--Accent)] border border-[var(--Accent)] focus:outline-none focus:ring-2 focus:ring-[var(--Accent)]"
          >
            <option value="">-- Select --</option>
            <option value="option1">Option One</option>
            <option value="option2">Option Two</option>
            <option value="option3">Option Three</option>
          </select>
        </div>

        <button
          type="submit"
          className="p-3 font-semibold text-lg bg-[var(--Accent)] text-[var(--Primary)] cursor-pointer rounded-xl hover:opacity-70  duration-700 delay-[2.5ms] transition-transform ease-in-out"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
