import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Grid,
  Card,
  Typography,
  Stack,
} from "@mui/material";
import { fetchLeetCodeStats } from "../../services/leetcodeService";
import { DifficultyChart } from "./DifficultyChart";
import { SubmissionCalendar } from "./SubmissionCalendar";

const LeetCodeDashboard: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeetCodeStats()
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching LeetCode stats:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
        <CircularProgress />
      </Stack>
    );
  }

  if (!stats) {
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        Failed to load LeetCode stats.
      </Typography>
    );
  }

  return (
    <Stack spacing={4} alignItems="center" sx={{ mt: 4 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3, p: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          {stats.totalSolved} Problems Solved
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Easy: {stats.easySolved} | Medium: {stats.mediumSolved} | Hard:{" "}
          {stats.hardSolved}
        </Typography>
      </Card>

      {/* Pie chart + Calendar grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{ width: "100%", maxWidth: "1200px" }}
      >
        <Grid size={{ xs: 12, md: 5 }}>   
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Difficulty Breakdown
            </Typography>
            <DifficultyChart
              easy={stats.easySolved}
              medium={stats.mediumSolved}
              hard={stats.hardSolved}
              total={stats.totalSolved}
            />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>   
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Submission Calendar
            </Typography>
            <SubmissionCalendar data={stats.submissionCalendar} />
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default LeetCodeDashboard;
