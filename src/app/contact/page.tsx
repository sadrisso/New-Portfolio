"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nx3r4gk",
        "template_q5z8i2j",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "sQoK4TQFQ-itpdBS4"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-800"
      >
        {/* Heading */}
        <motion.div {...fadeUp(0)} className="flex items-center justify-center juseven gap-4 mb-4">
          <button
            onClick={() => router.push("/")}
            className="text-orange-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">
            Contact
          </h1>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full mt-2 px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
              placeholder="Write your message..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-lg transition"
          >
            {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
          </motion.button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="text-green-400 mt-6 text-center font-medium">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </motion.div>
    </section>
  );
}
