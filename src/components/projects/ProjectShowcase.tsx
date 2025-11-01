import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Grid,
} from "@mui/material";
import { projectsData } from "./projectsData";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectShowcase: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        {projectsData.map((project, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: 4,
                boxShadow: 4,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: "cover" }}
              />

              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {project.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  ))}
                </Stack>
              </CardContent>

              <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
                {project.liveDemo && (
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}
                    href={project.liveDemo}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubLinks.map((link, i) => (
                  <Button
                    key={i}
                    size="small"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={link.url}
                    target="_blank"
                  >
                    {link.label}
                  </Button>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectShowcase;
