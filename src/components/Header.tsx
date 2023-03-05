import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';

import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
  const items = [
    {
      name: 'Profile',
      id: 'profile',
    },
    {
      name: 'ABOUT',
      id: 'about',
    },
    {
      name: 'SKILL SET',
      id: 'skill_set',
    },
    {
      name: 'WORKS',
      id: 'works',
    },
  ];
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <AccountCircle />
          <Typography> Shota Yokoi </Typography>
          <NavBar items={items} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
export default Header;
