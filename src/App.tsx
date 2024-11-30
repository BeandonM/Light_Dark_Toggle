import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <p className="mode-text">{theme === "light" ? "Light" : "Dark"}</p>
      <label className="switch">
        <input
          type="checkbox"
          id="theme-switch"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="switch-btn"></div>
      </label>
    </div>
  );
}

export default App;
