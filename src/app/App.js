// React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Contexts
import { ColorThemeProvider } from "contexts/ColorThemeContext";

// Components
import LayoutComponent from "app/components/Layout";
// firebase


// Screens
import LoginScreen from "app/components/Login"
import RegisterScreen from "app/components/Register"
import AboutScreen from "app/screens/About";
import HomeScreen from "app/screens/Home";
import NotFoundScreen from "app/screens/NotFound";
import ArchiveScreen from "app/screens/Archive";
import CalendarScreen from "app/screens/Calendar";
import ContributeScreen from "app/screens/Contribute";
import CreateEventScreen from "app/screens/CreateEvent";
import MemberInformationScreen from "app/screens/MemberInformation";
import NewPostScreen from "app/screens/NewPost";
import NotificationsScreen from "app/screens/Notifications";
import ProjectInformationScreen from "app/screens/ProjectInformation";

// Component Styling
import "./App.scss";

function App() {
  return (
    <ColorThemeProvider>
      <Router>
        <LayoutComponent>
          <Switch>
            <Route component = {RegisterScreen} path="/register" exact/>
            <Route component = {LoginScreen} path="/login" exact/>
            <Route component={HomeScreen} path="/" exact />
            <Route component={AboutScreen} path="/about" exact />
            <Route component={ArchiveScreen} path="/archive" exact />
            <Route component={CalendarScreen} path="/calendar" exact />
            <Route component={ContributeScreen} path="/contribute" exact />
            <Route component={CreateEventScreen} path="/create-event" exact />
            <Route
              component={MemberInformationScreen}
              path="/member-information"
              exact
            />
            <Route component={NewPostScreen} path="/new-post" exact />
            <Route
              component={NotificationsScreen}
              path="/notifications"
              exact
            />
            <Route
              component={ProjectInformationScreen}
              path="/project-information"
              exact
            />
            <Route component={NotFoundScreen} />
          </Switch>
        </LayoutComponent>
      </Router>
    </ColorThemeProvider>
  );
}

export default App;
