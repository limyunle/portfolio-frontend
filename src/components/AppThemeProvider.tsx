import * as React from "react";
import { ThemeProvider, createTheme, useColorScheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" }, 
  colorSchemes: {
    light: {
      palette: {
        background: { paper: "#ffffff" }, // header/footer bg
        text: { primary: "#000000" },    // text color
        primary: { main: "#1976d2" },    // for buttons/links
      },
    },
    dark: {
      palette: {
        background: { paper: "#121212" }, // header/footer bg
        text: { primary: "#ffffff" },
        primary: { main: "#90caf9" },
      },
    },
  },
});


function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();

  // mode is undefined on first render; guard to avoid hydration mismatch warnings
  if (!mode) return null;

  return (
    <IconButton
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      color="inherit"
      aria-label="Toggle light/dark mode"
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}


export default function AppThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      theme={theme}
      defaultMode="system"               
      noSsr                              
      disableTransitionOnChange          
      
    >
      <CssBaseline />
      {/* Put this button in your AppBar; inline here for brevity */}
      <ColorSchemeToggle />
      {children}
    </ThemeProvider>
  );
}
