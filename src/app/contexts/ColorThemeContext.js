// React
import React, { createContext, useMemo, useState } from 'react';

// Material
import { CssBaseline, useMediaQuery } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles';

// Modules
import Theme from 'modules/DefaultTheme';

const ColorThemeContext = createContext();

const ColorThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // States
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevThemeMode) =>
          prevThemeMode === 'light' ? 'dark' : 'light'
        );
      }
    }),
    []
  );

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(Theme(mode))),
    [mode]
  );

  return (
    <ColorThemeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorThemeContext.Provider>
  );
};

export const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#FAFAFA',
    },
    secondary: {
      main: '#00B6AD',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#A23F97',
    },
    success: {
      main: '#00B6AD',
    },
    text: {
      primary: '#005395',
      secondary: '#065faa',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
});

export { ColorThemeProvider };
export default ColorThemeContext;
