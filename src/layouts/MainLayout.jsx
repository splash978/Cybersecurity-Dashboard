import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex bg-[#050813] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;