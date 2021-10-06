// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Contexts
import { ColorThemeProvider } from 'contexts/ColorThemeContext';

// Components
import LayoutComponent from 'app/components/Layout';

// Screens
import AboutScreen from 'app/screens/About';
import HomeScreen from 'app/screens/Home';
import NotFoundScreen from 'app/screens/NotFound';

// Component Styling
import './App.scss';

const App = () => {
  return (
    <ColorThemeProvider>
      <Router>
        <LayoutComponent>
          <Switch>
            <Route component={HomeScreen} path='/' exact />
            <Route component={AboutScreen} path='/about' exact />
            <Route component={NotFoundScreen} />
          </Switch>
        </LayoutComponent>
      </Router>
    </ColorThemeProvider>
  );
};

export default App;
