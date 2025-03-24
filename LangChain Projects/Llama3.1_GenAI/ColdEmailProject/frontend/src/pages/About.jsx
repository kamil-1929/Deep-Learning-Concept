import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-xl shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold mb-4 text-lime-700">About ColdMail</h2>
    <p className="text-gray-600 leading-relaxed">
      ColdMail is an intelligent cold email generator designed to help job
      seekers craft personalized emails using LLMs. With just a job URL and a
      portfolio, it creates context-aware cold emails that get noticed.
    </p>
    <p className="mt-4 text-gray-600">
      Built with FastAPI, LangChain, and React — ColdMail is a productivity
      companion for networking in the job hunt.
    </p>
  </motion.div>
);

export default About;
