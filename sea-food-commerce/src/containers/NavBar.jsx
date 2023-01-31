import React from "react";
import Logo from "../components/Logo/Logo";
import Menus from "../components/Menus/Menus";
import { Box, Container } from "@mui/material";

const NavBar = () => {
  return (
    <Container
      sx={{
        display: { xs: "column" },
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
      <Menus />
    </Container>
  );
};

export default NavBar;
