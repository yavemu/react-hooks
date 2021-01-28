import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { isDarkModeTheme, setIsDarkModeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDarkModeTheme(!isDarkModeTheme);
  };

  return (
    <div className="Header">
      <h1
        style={{
          color: isDarkModeTheme ? "" : "blue",
        }}
      >
        ReactHooks
      </h1>
      <button type="button" onClick={handleClick}>
        {isDarkModeTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
