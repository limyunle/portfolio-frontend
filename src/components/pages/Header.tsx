import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const navItems = [
  { label: "Home", id: "home" },
  { label: "GitHub Stats", id: "github-stats" },
  { label: "LeetCode Stats", id: "leetcode-stats" },
  { label: "Projects", id: "projects" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; 
      
      let current = "home";
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: 1200 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Box sx={{ display: "flex" }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              color="inherit"
              onClick={() => scrollToSection(item.id)}
              sx={{
                mx: 1,
                fontWeight: activeSection === item.id ? "bold" : "normal",
                borderBottom: activeSection === item.id ? "2px solid white" : "none",
                transition: "border-bottom 0.2s ease, font-weight 0.2s ease",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
