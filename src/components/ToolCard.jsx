import React from "react";
import { motion } from "framer-motion";

const ToolCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0a0f1c] border border-gray-800 p-6 rounded-xl hover:bg-[#141b2f] cursor-pointer transition"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-[#141b2f] rounded-lg mb-4">
        <Icon size={24} className="text-blue-400" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ToolCard;