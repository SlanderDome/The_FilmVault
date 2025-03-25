import React, { useEffect, useState } from "react";
import './dark.css'
const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="dark-mode-btn">
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
