import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My Portfolio
      </Typography>
      <Button color="inherit">GitHub</Button>
      <Button color="inherit">LeetCode</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
