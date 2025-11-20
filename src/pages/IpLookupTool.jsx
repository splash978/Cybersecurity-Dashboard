import React, { useState } from "react";
import { lookupIP } from "../utils/iplookup";

const IpLookupTool = () => {
  const [ip, setIp] = useState("");
  const [data, setData] = useState(null);

  const handleLookup = async () => {
    const res = await lookupIP(ip);
    setData(res);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">IP Address Information</h1>

      <input
        type="text"
        placeholder="Enter IP address..."
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        className="w-full p-3 bg-[#141b2f] border border-gray-700 rounded-lg text-gray-200"
      />

      <button
        onClick={handleLookup}
        className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Lookup
      </button>

      {data && (
        <div className="mt-6 bg-[#0a0f1c] p-5 border border-gray-800 rounded-lg">
          <pre className="text-gray-300 text-sm">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IpLookupTool;