import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      textAlign: 'center',
      bgcolor: 'primary.main',
      color: 'white',
      mt: 'auto',
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
