import { useState, useEffect } from "react";
import styles from "./theme.module.css";
import ThemeIcon from "../ThemeIcon/ThemeIcon";
import ThemeButton from "../ThemeButton/ThemeButton";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDarkTheme = theme === "dark";
    if (isDarkTheme) {
      root.classList.add("dark");
    }
    return () => {
      root.classList.remove("dark");
    };
  }, [theme]);
  useEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = theme;
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={styles.theme}>
      <ThemeIcon theme={theme} />
      <ThemeButton onThemeChange={handleThemeChange} theme={theme} />
    </div>
  );
};

export default Theme;
