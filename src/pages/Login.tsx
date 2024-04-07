import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../components";
import logo from "../logo.png";

export const Login = () => {
  const isSmDown = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "100vh", textAlign: "center" }}>
      <img
        style={{
          margin: "20px 0",
        }}
        src={logo}
        alt=""
        width={140}
      />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        gap={2}
        maxWidth={isSmDown ? "80%" : "500px"}
        sx={{ margin: "0 auto" }}
      >
        <CustomInput label="Usuario" onChange={() => {}} />
        <CustomInput label="Contrasena" onChange={() => {}} />
      </Box>
      <Box marginTop={2}>
        <Button
          sx={{
            border: "1px solid #FF472F",
            background: "#FF472F",
            color: "#fff",
            transition: "transform 0.3s ease",
            "&:hover": {
              backgroundColor: "#FF472F",
              transform: "scale(1.1)",
            },
            "&:focus": {
              borderColor: "#FF472F",
              transform: "scale(1.1)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
          }}
          variant="contained"
          onClick={() => navigate("/actions")}
        >
          Iniciar Sesion
        </Button>
      </Box>
    </Box>
  );
};
