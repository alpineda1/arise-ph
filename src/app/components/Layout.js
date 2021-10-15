// React
import React from "react";
import { Link } from "react-router-dom";

// Material
import { Box, Button } from "@mui/material";

// Component Styling
import { componentStyles } from "./Layout.style";

const LayoutComponent = ({ children }) => {
  // Styles
  const { childrenContainer, box, link } = componentStyles();

  return (
    <Box className={box}>
      <Link className={link} to='/'>
        <Button variant='outlined'>Home</Button>
      </Link>
      <Link className={link} to='/notifications'>
        <Button variant='outlined'>Notifications</Button>
      </Link>
      <Link className={link} to='/new-post'>
        <Button variant='outlined'>New Post</Button>
      </Link>
      <Link className={link} to='/create-event'>
        <Button variant='outlined'>Create Event</Button>
      </Link>
      <Link className={link} to='/calendar'>
        <Button variant='outlined'>Calendar</Button>
      </Link>
      <Link className={link} to='/archive'>
        <Button variant='outlined'>Archive</Button>
      </Link>
      <Link className={link} to='/member-information'>
        <Button variant='outlined'>Member Information</Button>
      </Link>
      <Link className={link} to='/project-information'>
        <Button variant='outlined'>Project Information</Button>
      </Link>
      <Link className={link} to='/contribute'>
        <Button variant='outlined'>Contribute</Button>
      </Link>
      <Link className={link} to='/about'>
        <Button variant='contained'>About</Button>
      </Link>
      <Box className={childrenContainer}>{children}</Box>
    </Box>
  );
};

export default LayoutComponent;
