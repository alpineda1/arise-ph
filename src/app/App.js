// React
import React from 'react';

// Component Styling
import './App.scss';
import { Container, ThemeProvider } from "@material-ui/core";
import { theme } from "./contexts/ColorThemeContext.js";

import Header from './components/Header.js';
import Bucket from './components/Bucket';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
        </div>

        <div>
          <Bucket />
        </div>
      </ThemeProvider>
    </>
    );
  }

export default App;
