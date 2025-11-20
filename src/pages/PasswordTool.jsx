import React, { useState } from "react";
import { motion } from "framer-motion";
import { analyzePassword } from "../utils/password";

const PasswordTool = () => {
  const [password, setPassword] = useState("");
  const result = analyzePassword(password);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Password Strength Checker</h1>

      <input
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 bg-[#141b2f] border border-gray-700 rounded-lg text-gray-200 outline-none"
      />

      {password && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 bg-[#0a0f1c] p-4 border border-gray-800 rounded-lg"
        >
          <p>Strength: <span className="text-blue-400">{result.strength}</span></p>
          <p className="text-gray-300 mt-2">{result.feedback}</p>
        </motion.div>
      )}
    </div>
  );
};

export default PasswordTool;