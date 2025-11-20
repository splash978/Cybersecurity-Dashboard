import React, { useState } from "react";
import { generateHash } from "../utils/hashChecker";

const HashChecker = () => {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState(null);

  const handleGenerate = () => {
    setHashes(generateHash(text));
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Hash Generator</h1>

      <textarea
        className="w-full h-32 bg-[#141b2f] border border-gray-700 rounded-lg text-gray-200 p-3"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="mt-4 px-4 py-2 bg-blue-600 rounded-lg"
      >
        Generate Hashes
      </button>

      {hashes && (
        <div className="mt-6 bg-[#0a0f1c] p-4 border border-gray-800 rounded-lg">
          <pre className="text-gray-300 text-sm">{JSON.stringify(hashes, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default HashChecker;