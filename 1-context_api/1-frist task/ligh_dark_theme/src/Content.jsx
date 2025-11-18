import React from 'react'
import { ThemeProvider,useTheme } from "./ThemeProvider";
export const Content = () => {
    const {theme,toggleTheme} = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        width:"100vw",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme 🌗</button>
    </div>
  );
}
