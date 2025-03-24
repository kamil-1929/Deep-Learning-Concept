import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-lime-700">Contact Us</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-lime-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-lime-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-lime-400"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-lime-600 text-white px-6 py-2 rounded hover:bg-lime-700"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
