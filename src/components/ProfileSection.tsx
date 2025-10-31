import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogContent,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profilePicture from "../assets/profile_picture.jpg";

const ProfileSection: React.FC = () => {
  const [openPreview, setOpenPreview] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 6,
        p: 3,
        textAlign: "center",
      }}
    >
      <Avatar
        alt="Bobby Lim Yun Le"
        src={profilePicture}
        sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Bobby Lim Yun Le
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Software Engineer | Backend (Java, Go) | Frontend (Angular, React) | Cloud (AWS, Azure)
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2, flexWrap: "wrap", rowGap: 1 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" />
            <Link href="mailto:limyunle@gmail.com">
              limyunle@gmail.com
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon fontSize="small" />
            <Link href="https://github.com/limyunle" target="_blank">
              GitHub
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <LinkedInIcon fontSize="small" />
            <Link href="https://www.linkedin.com/in/bobby-lim-896305193" target="_blank">
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          href="/Bobby_Lim_Yun_Le_Resume.pdf"
          download
        >
          Download Resume
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<VisibilityIcon />}
          onClick={() => setOpenPreview(true)}
        >
          Preview Resume
        </Button>
      </CardActions>

      {/* Resume Preview Modal */}
      <Dialog
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0 }}>
          <iframe
            src={`${process.env.PUBLIC_URL}/Bobby_Lim_Yun_Le_Resume.pdf`}
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="Resume Preview"
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProfileSection;
