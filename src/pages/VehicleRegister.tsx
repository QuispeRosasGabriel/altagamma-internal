import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ActionButtons, CustomInput, CustomSelect } from "../components";
import dayjs, { Dayjs } from "dayjs";
import { IVehicle } from "../common";
import { BrandsList, CarsModelList } from "../mocks";

const sugerenciesMockList = {
  bmw: [
    {
      value: "$28.500",
      id: 1,
    },
    {
      value: "$30.000",
      id: 2,
    },
    {
      value: "$31.200",
      id: 3,
    },
  ],
  mercedes: [
    {
      value: "$29.300",
      id: 1,
    },
    {
      value: "$31.500",
      id: 2,
    },
    {
      value: "$34.000",
      id: 3,
    },
  ],
  audi: [
    {
      value: "$20.000",
      id: 1,
    },
    {
      value: "$19.900",
      id: 3,
    },
    {
      value: "$24.000",
      id: 2,
    },
  ],
  noResults: [
    {
      value: "Proximamente :)",
      id: 1,
    },
  ],
};

export const VehicleRegister = () => {
  const [registerForm, setRegisterForm] = useState<IVehicle>({
    brand: "",
    concession: "",
    km: "",
    model: "",
    year: dayjs(new Date().getFullYear().toString()),
  });

  const filteredModelsList = useMemo(
    () => CarsModelList.filter((c) => c.brand === registerForm?.brand),
    [registerForm?.brand]
  );

  const [isLoading, setIsLoading] = useState(false);
  const [sugerencies, setSugerencies] = useState<
    Array<{ value: string; id: number }>
  >([]);
  const isSmDown = useMediaQuery("(max-width:600px)");

  const startWebScrappingRequest = useCallback(() => {
    setIsLoading(true);
    let getSugerenciesMockList = [] as Array<{ value: string; id: number }>;
    if (registerForm.brand === "bmw") {
      getSugerenciesMockList = sugerenciesMockList.bmw;
    } else if (registerForm.brand === "mercedes-benz") {
      getSugerenciesMockList = sugerenciesMockList.mercedes;
    } else if (registerForm.brand === "audi") {
      getSugerenciesMockList = sugerenciesMockList.audi;
    } else {
      getSugerenciesMockList = sugerenciesMockList.noResults;
    }

    setTimeout(() => {
      setIsLoading(false);
      setSugerencies(getSugerenciesMockList);
    }, 1000);
  }, [registerForm.brand]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ color: "#fff" }}
          py={2}
        >
          Registro De Vehiculo
        </Typography>
        <Grid container px={2}>
          <Grid xs={12} sm={12} md={6} my={2} px={2}>
            <CustomSelect
              options={BrandsList}
              label="Marca"
              value={registerForm.brand}
              name="brand"
              onChange={(ev) => {
                setRegisterForm({
                  ...registerForm,
                  [ev.target.name]: ev.target.value ?? "",
                });
              }}
            />
          </Grid>
          <Grid xs={12} sm={12} md={6} my={2} px={2}>
            <CustomSelect
              options={filteredModelsList}
              label="Modelo"
              disabled={!registerForm.brand}
              name="model"
              value={registerForm.model}
              onChange={(ev) => {
                setRegisterForm({
                  ...registerForm,
                  [ev.target.name]: ev.target.value ?? "",
                });
              }}
            />
          </Grid>
        </Grid>
        <Grid container px={2}>
          <Grid xs={12} sm={12} md={6} my={2} px={2}>
            <CustomInput
              label="Kilometraje"
              value={registerForm?.km}
              name="km"
              onChange={(ev) =>
                setRegisterForm({
                  ...registerForm,
                  [ev.target.name]: ev.target.value,
                })
              }
            />
          </Grid>
          <Grid xs={12} sm={12} md={6} my={2} px={2}>
            <DatePicker
              views={["year"]}
              label=""
              name="year"
              value={registerForm.year}
              disableFuture
              onChange={(newValue: any) => {
                setRegisterForm({
                  ...registerForm,
                  year: newValue,
                });
              }}
              sx={{
                width: "100%",
                "& .MuiSvgIcon-root": {
                  color: "#FF472F",
                },
                "& .MuiIconButton-root": {
                  color: "#FF472F",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#FF472F",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF472F",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF472F",
                },
                "&.Mui-hovered .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF472F",
                  color: "#fff",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#FF472F",
                },
                "& .MuiFormLabel-root.Mui-hover": {
                  color: "#FF472F",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  border: "1px solid #FF472F",
                  "& fieldset": {
                    border: "1px solid #FF472F",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FF472F",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FF472F",
                  },
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container px={2}>
          <Grid xs={12} sm={12} md={6} my={2} px={2}>
            <CustomSelect
              onChange={(ev) => {
                setRegisterForm({
                  ...registerForm,
                  [ev.target.name]: ev.target.value ?? "",
                });
              }}
              name="concession"
              value={registerForm?.concession}
              options={[
                {
                  name: "Concesion",
                  value: "0",
                },
                {
                  name: "Propio",
                  value: "1",
                },
              ]}
              label="Tipo de ingreso"
            />
          </Grid>
          <Grid xs={12} sm={12} md={6} my={2} px={2}>
            <CustomInput
              label="Precio"
              onChange={(ev) =>
                setRegisterForm({
                  ...registerForm,
                  [ev.target.name]: ev.target.value,
                })
              }
              isLoading={isLoading}
              name="price"
              value={registerForm?.price}
              showIcon={
                !!registerForm.brand &&
                !!registerForm.year &&
                !!registerForm.model
              }
              onIconClick={() => startWebScrappingRequest()}
            />
            {!!sugerencies.length && (
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {sugerencies.map((s, idx) => (
                  <>
                    <Typography
                      sx={{
                        color: "#fff",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#ff6900",
                        },
                      }}
                      onClick={() =>
                        setRegisterForm({
                          ...registerForm,
                          price: s.value,
                        })
                      }
                      key={s.id}
                    >
                      {s.value}
                    </Typography>
                  </>
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <ActionButtons
          onClean={() =>
            setRegisterForm({
              brand: "",
              concession: "",
              km: "",
              model: "",
              year: dayjs(new Date().getFullYear().toString()),
              price: "0",
            })
          }
          onSave={() => {}}
        />
      </Box>
    </LocalizationProvider>
  );
};
