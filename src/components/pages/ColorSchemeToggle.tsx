import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorScheme } from "@mui/material/styles";

export default function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <IconButton
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      color="inherit"
      aria-label="Toggle light/dark mode"
      sx={{ zIndex: 2000 }} // <-- ensure it's always above header elements
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
