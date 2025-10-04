import React, { useEffect, useState } from "react";
import { fetchLeetCodeStats, LeetCodeStats } from "../../services/leetcodeService";
import { CircularProgress, Typography, Grid } from "@mui/material";
import { Solved } from "./Solved";
import { SubmissionCalendar } from "./SubmissionCalendar";

const LeetCodeDashboard: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeetCodeStats()
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!stats) return null;

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Solved
          totalSolved={stats.totalSolved}
          easySolved={stats.easySolved}
          mediumSolved={stats.mediumSolved}
          hardSolved={stats.hardSolved}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <SubmissionCalendar submissionCalendar={stats.submissionCalendar} />
      </Grid>
    </Grid>
  );
};

export default LeetCodeDashboard;
