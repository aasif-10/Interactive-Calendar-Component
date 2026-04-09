/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext(null);

/**
 * Custom hook to consume the current theme and toggle function.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/**
 * Theme provider wrapper that attaches data-theme attributes to the document node.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("calendar_theme", "light");

  useEffect(() => {
    // Apply the theme to the root HTML element
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  /**
   * Modifies the local storage value, switching from dark to light or vice versa.
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
