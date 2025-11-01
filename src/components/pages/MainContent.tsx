import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProfileSection from "../profile/ProfileSection";
import GitHubDashboard from "../github/GitHubDashboard";
import LeetCodeDashboard from "../leetcode/LeetCodeDashboard";
import ProjectShowcase from "../projects/ProjectShowcase";

const HEADER_HEIGHT = 80;

const MainContent: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        id="profile"
        sx={{
          mb: 8,
          pt: `${HEADER_HEIGHT}px`, 
          mt: `-${HEADER_HEIGHT}px`, 
        }}
      >
        <ProfileSection />
      </Box>

      <Box
        id="projects"
        sx={{
          mb: 8,
          pt: `${HEADER_HEIGHT}px`,
          mt: `-${HEADER_HEIGHT}px`,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Projects Showcase
        </Typography>
        <ProjectShowcase />
      </Box>

      <Box
        id="github-stats"
        sx={{
          mb: 8,
          pt: `${HEADER_HEIGHT}px`,
          mt: `-${HEADER_HEIGHT}px`,
        }}
      >
        <Typography variant="h4" gutterBottom>
          GitHub Dashboard
        </Typography>
        <GitHubDashboard />
      </Box>

      <Box
        id="leetcode-stats"
        sx={{
          mb: 8,
          pt: `${HEADER_HEIGHT}px`,
          mt: `-${HEADER_HEIGHT}px`,
        }}
      >
        <Typography variant="h4" gutterBottom>
          LeetCode Progress
        </Typography>
        <LeetCodeDashboard />
      </Box>
    </Container>
  );
};

export default MainContent;
