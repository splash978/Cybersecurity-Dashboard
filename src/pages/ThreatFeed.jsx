import React, { useState, useEffect } from "react";
import { THREAT_FEED_URL } from "../utils/constants";

const ThreatFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch(THREAT_FEED_URL)
      .then((res) => res.json())
      .then((data) => setFeed(data.items || []))
      .catch(() => setFeed([]));
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Threat Intelligence Feed</h1>

      <div className="space-y-4">
        {feed.map((item, i) => (
          <div key={i} className="bg-[#0a0f1c] p-4 border border-gray-800 rounded-lg">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatFeed;