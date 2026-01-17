import styles from "./theme-button.module.css";

const ThemeButton = ({ onThemeChange, theme }) => {
  const isLightTheme = theme === "light";
  const isPressed = !isLightTheme;
  const label = `Switch to ${isLightTheme ? "dark" : "light"} theme`;

  return (
    <button
      className={`${styles.button} ${!isLightTheme && styles.active}`}
      type="button"
      aria-label={label}
      aria-pressed={isPressed}
      onClick={onThemeChange}
    ></button>
  );
};

export default ThemeButton;
