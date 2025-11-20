import React from "react";
import { motion } from "framer-motion";
import ToolCard from "../components/ToolCard";
import SectionHeader from "../components/SectionHeader";
import { Shield, Key, Server, Fingerprint, Network, Cpu } from "lucide-react";

const Dashboard = () => {
  const tools = [
    { icon: Key, title: "Password Strength Checker", description: "Analyze password entropy & weaknesses." },
    { icon: Network, title: "IP Info Lookup", description: "Get geolocation & ASN data for any IP." },
    { icon: Shield, title: "Threat Feed", description: "Latest cybersecurity threat intelligence feeds." },
    { icon: Fingerprint, title: "Hash Checker", description: "Verify MD5 / SHA hashes instantly." },
    { icon: Cpu, title: "System Monitor", description: "Track system memory, CPU & network activity." },
  ];

  return (
    <div className="p-6 text-white">
      <SectionHeader title="Dashboard Overview" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {tools.map((tool, i) => (
          <ToolCard key={i} icon={tool.icon} title={tool.title} description={tool.description} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;