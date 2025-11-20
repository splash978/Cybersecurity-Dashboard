import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="text-xl font-bold text-white mb-4 tracking-wide"
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeader;