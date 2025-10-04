import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface DifficultyChartProps {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}

export const DifficultyChart: React.FC<DifficultyChartProps> = ({ easy, medium, hard, total }) => {
  const theme = useTheme();

  const data = [
    { name: "Easy", value: easy },
    { name: "Medium", value: medium },
    { name: "Hard", value: hard },
  ];

  // Adjusted for dark/light mode
  const COLORS =
    theme.palette.mode === "dark"
      ? ["#3FB950", "#F1E05A", "#EC6D71"]
      : ["#2EA043", "#FBCA04", "#D73A49"];

  return (
    <Card sx={{ maxWidth: 400, mx: "auto" }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          Problem Difficulty Breakdown
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
        <Typography variant="h6" align="center">
          Total Solved: {total}
        </Typography>
      </CardContent>
    </Card>
  );
};
