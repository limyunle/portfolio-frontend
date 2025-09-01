import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import AppThemeProvider from "./components/AppThemeProvider";

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
