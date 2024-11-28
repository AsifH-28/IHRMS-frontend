import React, { createContext, useState, useContext } from "react";
import { ConfigProvider } from "antd";
import { lightTheme, darkTheme } from "../../styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      
      <ConfigProvider theme={currentTheme}>
        <StyledThemeProvider theme={currentTheme}>
          {children}
        </StyledThemeProvider>
        </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
