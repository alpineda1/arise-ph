// React
import React from 'react';
import { Link } from 'react-router-dom';

// Material
import { Box, Button } from '@mui/material';

// Component Styling
import { componentStyles } from './Layout.style';

const LayoutComponent = ({ children }) => {
  // Styles
  const { childrenContainer, box, link } = componentStyles();

  return (
    <Box className={box}>
      <Link className={link} to='/'>
        <Button variant='outlined'>Home</Button>
      </Link>
      <Link className={link} to='/about'>
        <Button variant='contained'>About</Button>
      </Link>
      <Box className={childrenContainer}>{children}</Box>
    </Box>
  );
};

export default LayoutComponent;
