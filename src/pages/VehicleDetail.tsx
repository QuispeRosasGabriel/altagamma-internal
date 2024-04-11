import { useParams } from "react-router-dom";

import React from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ImageCarousel } from "../components";
import { Grid } from "@mui/material";
import { brandConversor } from "../mocks";

export const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { brand, model, km, price, year, concession } = JSON.parse(
    localStorage.getItem("CARS_LIST") ?? "{}"
  ).find((v: any) => v.id === Number(id));

  const images = [
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-2.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-3.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-5.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-4.jpeg",
    "https://www.altagamma.pe/wp-content/uploads/2023/08/Untitled-18.jpeg",
  ];

  return (
    <Grid container alignItems="center" style={{ height: "100vh" }}>
      <Grid
        xs={12}
        sm={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <ImageCarousel images={images} />
      </Grid>
      <Grid sm={12} xs={12} md={6}>
        <Box>
          <Typography
            sx={{ color: "#FF472F", fontSize: "1.88rem" }}
            textAlign="center"
            mb={2}
          >{`${brand.toUpperCase()} ${model.toUpperCase()}`}</Typography>
          <Box
            component="hr"
            sx={{
              maxWidth: "50%",
              border: 0,
              height: "1px",
              backgroundColor: "#FF472F",
              my: 2,
            }}
          />
          <Grid
            container
            sx={{
              color: "#fff",
              display: "flex",
              justifyContent: "space-around",
            }}
            xs={12}
            sm={12}
          >
            <Box>
              <Typography mb={1}>Marca</Typography>
              <Typography mb={1}>Modelo</Typography>
              <Typography mb={1}>Kilometraje</Typography>
              <Typography mb={1}>Precio</Typography>
              <Typography mb={1}>Año</Typography>
            </Box>
            <Box>
              <Typography mb={1}>
                {brandConversor(brand)?.toUpperCase()}
              </Typography>
              <Typography mb={1}>{model.toUpperCase()}</Typography>
              <Typography mb={1}>{km}</Typography>
              <Typography mb={1}>${price}</Typography>
              <Typography mb={1}>{year.toString().split("-")[0]}</Typography>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
