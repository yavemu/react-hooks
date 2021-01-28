import React, { useState } from "react";

const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [isDarkModeTheme, setIsDarkModeTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkModeTheme, setIsDarkModeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
