import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <AccountCircle />
        <Typography> Shota Yokoi </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
