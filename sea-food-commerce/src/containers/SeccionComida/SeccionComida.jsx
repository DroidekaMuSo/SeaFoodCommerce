import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CardFood from "../../components/CardFood/CardFood";

const SeccionComida = ({ title,meals }) => {
  return (
    <Container>
      {/* Banner de la seccion */}
      <Box
        sx={{
          width: "100%",
          mt: "2rem",
          height: "2rem",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "0.3rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
          }}
          id="delCazo"
        >
          {title}
        </Typography>
      </Box>

      {
        meals.map(meal => {
          return <CardFood title={meal.name} description={meal.description} />
        })
      }
      
    </Container>
  );
};

export default SeccionComida;
