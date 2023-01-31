import { Box, Typography } from "@mui/material";
import React from "react";
import "./Menus.css";

const Menus = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ul
        style={{
          display: { xs: "column" },
          justifyContent: "center",
          alignContent: "center",
          gap: "1.3rem",
          listStyle: "none",
        }}
      >
        <Box sx={{ my: "0.8rem", textAlign: "center" }}>
          <a href="#delCazo">
            <Typography variant="body2" fontSize={"1.25rem"}>
              Del Cazo
            </Typography>
          </a>
        </Box>
        <Box sx={{ my: "0.8rem", textAlign: "center" }}>
          <a href="">
            <Typography variant="body2" fontSize={"1.25rem"}>
              Del Mar
            </Typography>
          </a>
        </Box>
        <Box sx={{ my: "0.8rem", textAlign: "center" }}>
          <a href="">
            <Typography variant="body2" fontSize={"1.25rem"}>
              Especialidades
            </Typography>
          </a>
        </Box>
        <Box sx={{ my: "0.8rem", textAlign: "center" }}>
          <a href="">
            <Typography variant="body2" fontSize={"1.25rem"}>
              Bebidas
            </Typography>
          </a>
        </Box>
        <Box sx={{ my: "0.8rem", textAlign: "center" }}>
          <a href="">
            <Typography variant="body2" fontSize={"1.25rem"}>
              Contactanos
            </Typography>
          </a>
        </Box>
        <Box sx={{ my: "0.8rem", textAlign: "center" }}>
          <a href="">
            <Typography variant="body2" fontSize={"1.25rem"}>
              Ubicaciones y Horarios
            </Typography>
          </a>
        </Box>
      </ul>
    </Box>
  );
};

export default Menus;
