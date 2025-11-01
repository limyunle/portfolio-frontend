import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ColorSchemeToggle from "./ColorSchemeToggle";

const navItems = [
  { label: "Profile", id: "profile" },
  { label: "GitHub Stats", id: "github-stats" },
  { label: "LeetCode Stats", id: "leetcode-stats" },
  { label: "Projects", id: "projects" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerHeight = document.getElementById("app-header")?.offsetHeight || 80;

    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8; 
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setDrawerOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "profile";
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
    <AppBar
      id="app-header"
      position="fixed"
      color="primary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List sx={{ width: 250, pt: `${document.getElementById("app-header")?.offsetHeight || 80}px` }}>
                {navItems.map((item) => (
                  <ListItemButton
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    selected={activeSection === item.id}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
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
        )}

        <Box>
          <ColorSchemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
