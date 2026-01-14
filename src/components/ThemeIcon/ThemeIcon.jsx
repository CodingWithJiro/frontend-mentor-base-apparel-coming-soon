import ThemeIconLight from "../ThemeIconLight/ThemeIconLight";
import ThemeIconDark from "../ThemeIconDark/ThemeIconDark";

const ThemeIcon = ({ theme }) => {
  const isLightTheme = theme === "light";
  return <>{isLightTheme ? <ThemeIconLight /> : <ThemeIconDark />}</>;
};

export default ThemeIcon;
