import React, { useEffect, useState } from "react";
import { fetchRepos, Repo } from "../../services/githubService";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Link,
} from "@mui/material";

const GitHubDashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRepos()
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Grid container spacing={2}>
      {repos.map((repo) => (
        <Grid key={repo.name} size={{ xs: 12, sm: 6, md: 4 }}>
          <Box display="flex" height="100%">
            <Card
              sx={{
                flex: 1, 
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom noWrap>
                  {repo.name}
                </Typography>
                <Link href={repo.html_url} target="_blank" rel="noopener">
                  View on GitHub
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GitHubDashboard;
