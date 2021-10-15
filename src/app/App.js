// React
import React from 'react';

// Component Styling
import './App.scss';
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./contexts/ColorThemeContext.js";

import Header from './components/Header.js';
import Feed from './components/Feed.js';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
        </div>

        <div>
          <Feed />
        </div>
      </ThemeProvider>
    </>
    );
  }

export default App;
