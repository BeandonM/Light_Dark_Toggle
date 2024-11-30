import React, { useState, useEffect } from "react";
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
  return <></>;
}

export default App;
