import React from "react";
import { Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import userImg from "../assets/sp.jpg";


const Navbar = () => {
  return (
    <nav className="w-full bg-[#0a0f1c] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      
      {/* Left: Search */}
      <div className="flex items-center gap-3 bg-[#141b2f] px-4 py-2 rounded-lg w-72">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search logs, threats, IPs..."
          className="bg-transparent text-sm text-gray-200 outline-none w-full"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6">
        <ThemeToggle />

        <div className="relative cursor-pointer">
          <Bell size={22} className="text-gray-300 hover:text-white" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
        </div>

        <img
             src={userImg}
             alt="User"
             className="w-10 h-10 rounded-full border border-gray-700"
        />

      </div>

    </nav>
  );
};

export default Navbar;