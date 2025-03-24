import React from "react";
import EmailGeneratorApp from "../components/EmailGeneratorApp";
import { motion } from "framer-motion";

const Generate = () => (
  <motion.div
    className="mt-10 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <EmailGeneratorApp />
  </motion.div>
);

export default Generate;
