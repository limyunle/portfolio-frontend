import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const MainContent: React.FC = () => (
  <Container sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 6}}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">GitHub Dashboard</Typography>
          <Typography variant="body2">Placeholder for GitHub projects</Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 6}}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">LeetCode Dashboard</Typography>
          <Typography variant="body2">Placeholder for LeetCode stats</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default MainContent;
