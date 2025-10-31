import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div">
          Bobby Lim Yun Le
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
