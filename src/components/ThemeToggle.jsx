import React from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-10 h-10 flex items-center justify-center bg-[#141b2f] border border-gray-700 rounded-lg hover:bg-[#1b243d] transition"
    >
      {dark ? (
        <Moon size={18} className="text-yellow-400" />
      ) : (
        <Sun size={18} className="text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;