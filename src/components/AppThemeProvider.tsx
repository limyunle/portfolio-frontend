// src/theme/AppThemeProvider.tsx
import * as React from "react";
import { ThemeProvider, createTheme, useColorScheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// 1) Create a theme with color schemes + CSS variables enabled
const theme = createTheme({
  // Enable CSS theme variables so both schemes are generated and switch instantly
  cssVariables: { colorSchemeSelector: "class" }, // or 'data' / '.theme-%s'
  colorSchemes: {
    light: {
      palette: {
        // put your light overrides here (optional)
      },
    },
    dark: {
      palette: {
        // put your dark overrides here (optional)
      },
    },
  },
});

// 2) Toggle component using useColorScheme from MUI v7
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

// 3) Provider component you’ll import in main.tsx
export default function AppThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      theme={theme}
      defaultMode="system"               // initial: follow OS preference
      noSsr                              // SPA: skip double render & reduce flicker
      disableTransitionOnChange          // optional: instant switch, no CSS transitions
      // storageManager: null            // uncomment to disable persistence
    >
      <CssBaseline />
      {/* Put this button in your AppBar; inline here for brevity */}
      <ColorSchemeToggle />
      {children}
    </ThemeProvider>
  );
}
