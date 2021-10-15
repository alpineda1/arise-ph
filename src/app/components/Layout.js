// React
import React from "react";
import { Link } from "react-router-dom";

// Material
import { Box, Button } from "@mui/material";

// Component Styling
// import { componentStyles } from "./Layout.style";

const LayoutComponent = ({ children }) => {
  // Styles
  // const { childrenContainer, box, link } = componentStyles();

  return (
    <Box>
      <Link to='/'>
        <Button variant='outlined'>Home</Button>
      </Link>
      <Link to='/notifications'>
        <Button variant='outlined'>Notifications</Button>
      </Link>
      <Link to='/new-post'>
        <Button variant='outlined'>New Post</Button>
      </Link>
      <Link to='/create-event'>
        <Button variant='outlined'>Create Event</Button>
      </Link>
      <Link to='/calendar'>
        <Button variant='outlined'>Calendar</Button>
      </Link>
      <Link to='/archive'>
        <Button variant='outlined'>Archive</Button>
      </Link>
      <Link to='/member-information'>
        <Button variant='outlined'>Member Information</Button>
      </Link>
      <Link to='/project-information'>
        <Button variant='outlined'>Project Information</Button>
      </Link>
      <Link to='/contribute'>
        <Button variant='outlined'>Contribute</Button>
      </Link>
      <Link to='/about'>
        <Button variant='contained'>About</Button>
      </Link>
      <Box>{children}</Box>
    </Box>
  );
};

export default LayoutComponent;
