import React, { useState, useEffect } from "react";

const SystemMonitor = () => {
  const [stats, setStats] = useState({ cpu: 12, memory: 27 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 80),
        memory: Math.floor(Math.random() * 90),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">System Monitor</h1>

      <div className="bg-[#0a0f1c] p-5 border border-gray-800 rounded-lg space-y-4">
        <p>CPU Usage: <span className="text-blue-400">{stats.cpu}%</span></p>
        <p>Memory Usage: <span className="text-blue-400">{stats.memory}%</span></p>
      </div>
    </div>
  );
};

export default SystemMonitor;