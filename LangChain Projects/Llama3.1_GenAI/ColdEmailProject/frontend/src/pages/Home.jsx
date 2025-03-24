import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-green-100 via-white to-lime-100 flex flex-col justify-center items-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl text-center max-w-3xl w-full border border-white">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-lime-700">ColdMail</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          🚀 An AI-powered assistant that crafts personalized cold emails from
          job listings. Paste a job URL, match your portfolio, and get a
          ready-to-send email in seconds.
        </p>
        <Link to="/generate">
          <button className="text-lg px-8 py-4 rounded-full bg-lime-600 text-white hover:bg-lime-700 transition flex items-center justify-center">
            <Rocket className="mr-2 h-5 w-5" /> Try It Now
          </button>
        </Link>
      </div>

      <div className="mt-16 text-center text-gray-600 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Why ColdMail?</h2>
        <ul className="space-y-2 text-left">
          <li>✅ Extract job details directly from listings</li>
          <li>✅ Match your portfolio using AI</li>
          <li>✅ Generate compelling cold emails instantly</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Home;
