import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "8rem", margin: "0.5rem auto" }}
        src="https://res.cloudinary.com/dsorb9btj/image/upload/v1675121362/shrimp-logo-template-prawn-logo-design-Graphics-29315836-1_hgsieu-removebg-preview_v3camr.png"
        alt="Logo de Mariscos Java y Rosy"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Camarones
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Java Y Rosy
        </Typography>
      </Box>
    </Box>
  );
};

export default Logo;
