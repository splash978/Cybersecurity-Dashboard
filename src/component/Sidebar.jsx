import React from "react";
import { 
  ShieldCheck, 
  Activity, 
  Bug, 
  Globe, 
  FileSearch, 
  Settings, 
  LogOut, 
  Menu 
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const menuItems = [
    { name: "Threat Monitor", icon: <ShieldCheck /> },
    { name: "Live Activity", icon: <Activity /> },
    { name: "Logs", icon: <FileSearch /> },
    { name: "Vulnerabilities", icon: <Bug /> },
    { name: "IP Scanner", icon: <Globe /> },
    { name: "Settings", icon: <Settings /> },
  ];

  return (
    <div
      className={`h-screen ${
        open ? "w-64" : "w-20"
      } bg-[#0a0f1c] text-gray-200 transition-all duration-300 border-r border-gray-800`}
    >
      {/* Sidebar Top */}
      <div className="flex items-center justify-between px-4 py-6">
        <h1 className={`text-xl font-bold tracking-wide ${!open && "hidden"}`}>
          CyberDash
        </h1>
        <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>

      {/* Nav Links */}
      <nav className="mt-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 px-4 py-3 hover:bg-[#141b2f] transition cursor-pointer rounded-md"
            >
              {item.icon}
              {open && <span>{item.name}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 px-4">
        <li className="flex items-center gap-4 px-4 py-3 hover:bg-red-700/60 transition cursor-pointer rounded-md">
          <LogOut />
          {open && <span>Logout</span>}
        </li>
      </div>
    </div>
  );
};

export default Sidebar;