import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Tooltip, Typography } from "@mui/material";

interface SubmissionCalendarProps {
  data?: { [timestamp: string]: number } | null;
}

export const SubmissionCalendar: React.FC<SubmissionCalendarProps> = ({ data }) => {
  const theme = useTheme();
  const safeData = data ?? {};
  const dayKeys = Object.keys(safeData);

  if (dayKeys.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 160,
          p: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          No submissions yet.
        </Typography>
      </Box>
    );
  }

  const days = dayKeys
    .map((ts) => ({
      date: new Date(parseInt(ts) * 1000),
      count: safeData[ts],
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  // Dynamically adjust colors for light/dark mode
  const getColor = (count: number) => {
    if (count === 0)
      return theme.palette.mode === "dark" ? "#2d333b" : "#ebedf0";

    if (theme.palette.mode === "dark") {
      if (count > 20) return "#0e4429";
      if (count > 10) return "#006d32";
      if (count > 5) return "#26a641";
      return "#39d353";
    } else {
      if (count > 20) return "#216e39";
      if (count > 10) return "#30a14e";
      if (count > 5) return "#40c463";
      return "#9be9a8";
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(12px, 1fr))",
        gap: "3px",
        justifyContent: "center",
        maxWidth: "100%",
        overflow: "hidden",
        p: 1,
      }}
    >
      {days.map((day, idx) => (
        <Tooltip
          key={idx}
          title={`${day.date.toDateString()}: ${day.count} submissions`}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "2px",
              backgroundColor: getColor(day.count),
              transition: "background-color 0.3s ease",
            }}
          />
        </Tooltip>
      ))}
    </Box>
  );
};
