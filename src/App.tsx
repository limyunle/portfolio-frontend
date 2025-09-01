import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <CssBaseline />
    <Header />
    <MainContent />
    <Footer />
  </Box>
);

export default App;
