import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" },
  colorSchemes: {
    light: {
      palette: {
        background: { paper: "#ffffff" },
        text: { primary: "#000000" },
        primary: { main: "#1976d2" },
      },
    },
    dark: {
      palette: {
        background: { paper: "#121212" },
        text: { primary: "#ffffff" },
        primary: { main: "#90caf9" },
      },
    },
  },
});

export default function AppThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme} defaultMode="system" noSsr disableTransitionOnChange>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
