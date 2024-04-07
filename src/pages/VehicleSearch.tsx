import { Box, Grid } from "@mui/material";
import { CustomInput, EnhancedTable } from "../components";

export const VehicleSearch = () => {
  return (
    <Box sx={{ padding: "0px 10px" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Grid container display="flex" justifyContent="center" mb={2}>
          <Grid sm={12} md={6} p={1}>
            <CustomInput label="Precio" onChange={() => {}} />
          </Grid>
          <Grid sm={12} md={6} p={1}>
            <CustomInput label="Precio" onChange={() => {}} />
          </Grid>
        </Grid>
        <Grid container display="flex" justifyContent="center" mb={2}>
          <Grid sm={12} md={6} p={1}>
            <CustomInput label="Precio" onChange={() => {}} />
          </Grid>
          <Grid sm={12} md={6} p={1}>
            <CustomInput label="Precio" onChange={() => {}} />
          </Grid>
        </Grid>
        <Grid container display="flex" justifyContent="center" mb={2}>
          <Grid sm={12} md={6} p={1}>
            <CustomInput label="Precio" onChange={() => {}} />
          </Grid>
          <Grid sm={12} md={6} p={1}>
            <CustomInput label="Precio" onChange={() => {}} />
          </Grid>
        </Grid>
      </Box>
      <EnhancedTable />
    </Box>
  );
};
