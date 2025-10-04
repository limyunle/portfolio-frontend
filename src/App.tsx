import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import MainContent from "./components/pages/MainContent";
import AppThemeProvider from "./components/pages/AppThemeProvider";

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <Router>
        <Header />
        <MainContent />
        <Footer />
      </Router>
    </AppThemeProvider>
  );
};

export default App;
