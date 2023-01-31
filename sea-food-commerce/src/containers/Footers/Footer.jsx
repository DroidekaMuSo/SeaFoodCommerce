import { Box, Container, fontSize } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        width: "100%",
        mt: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <GitHubIcon sx={{ fontSize: "3rem", mx: "auto" }} />
          <Typography
            variant="caption"
            sx={{ textAlign: "center", mt: "0.4rem" }}
          >
            DroidekaMuSo
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <LinkedInIcon sx={{ fontSize: "3rem", mx: "auto" }} />
          <Typography
            variant="caption"
            sx={{ textAlign: "center", mt: "0.4rem" }}
          >
            Diego Muñoz
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
