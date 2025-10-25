import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProfileSection from "../ProfileSection";
import GitHubDashboard from "../github/GitHubDashboard";
import LeetCodeDashboard from "../leetcode/LeetCodeDashboard";

const MainContent: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box id="profile" sx={{ mb: 8 }}>
        <ProfileSection />
      </Box>

      <Box id="github" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          GitHub Dashboard
        </Typography>
        <GitHubDashboard />
      </Box>

      <Box id="leetcode" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          LeetCode Progress
        </Typography>
        <LeetCodeDashboard />
      </Box>

      <Box id="projects" sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Projects Showcase
        </Typography>
        <Typography variant="body1" color="text.secondary">
          🚧 Coming soon: highlight key projects with screenshots, links, and descriptions.
        </Typography>
      </Box>
    </Container>
  );
};

export default MainContent;
