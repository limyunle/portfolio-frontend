import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Bobby Lim Yun Le. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
