import { Alert, Box, Grid, Typography } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ActionButtons, CustomInput, CustomSelect } from "../components";
import dayjs from "dayjs";
import { IVehicle } from "../common";
import { BrandsList, CarsModelList } from "../mocks";
import { CheckCircleOutline } from "@mui/icons-material";

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
    id: 0,
    brand: "",
    model: "",
    km: null,
    price: null,
    year: dayjs(new Date().getFullYear().toString()),
    concession: "",
  });

  const filteredModelsList = useMemo(
    () => CarsModelList.filter((c) => c.brand === registerForm?.brand),
    [registerForm?.brand]
  );
  const priceRef = "priceInput";
  const [isLoading, setIsLoading] = useState(false);
  const [sugerencies, setSugerencies] = useState<
    Array<{ value: string; id: number }>
  >([]);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  const focusOnInput = () => {
    const inputElement = document.getElementById(
      priceRef
    ) as HTMLInputElement | null;
    if (inputElement) {
      inputElement.focus();
    }
  };

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

  const handleSave = () => {
    if (
      registerForm.brand &&
      registerForm.concession &&
      registerForm.brand &&
      registerForm.km &&
      registerForm.price &&
      registerForm.model
    ) {
      const dataFromStorage =
        JSON.parse(localStorage.getItem("CARS_LIST") as any) ?? [];
      const updatedList = Array.isArray(dataFromStorage)
        ? [...dataFromStorage, { ...registerForm, id: Date.now() }]
        : [{ ...registerForm, id: Date.now() }];
      localStorage.setItem("CARS_LIST", JSON.stringify(updatedList));
      setRegistrationCompleted(true);

      setTimeout(() => {
        setRegistrationCompleted(false);
        window.history.back();
      }, 1000);
    } else {
      //thrown an err
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {registrationCompleted && (
        <Alert
          icon={<CheckCircleOutline fontSize="inherit" />}
          severity="success"
          sx={{
            position: "fixed",
            top: "20px",
            left: "20px",
            opacity: 1,
            transform: "translateX(0)",
            animation: "fadeAndMoveIn 0.5s forwards", // Apply the animation
            "@keyframes fadeAndMoveIn": {
              "0%": {
                opacity: 0,
                transform: "translateX(-100px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
          }}
        >
          Vehiculo Registrado
        </Alert>
      )}
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
              type="number"
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
              id={priceRef}
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
                      onClick={() => {
                        setRegisterForm({
                          ...registerForm,
                          price: s.value as any,
                        });
                        focusOnInput();
                      }}
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
              km: "0" as any,
              model: "",
              id: 0,
              year: dayjs(new Date().getFullYear().toString()),
              price: "0" as any,
            })
          }
          disabledSave={
            !registerForm.brand ||
            !registerForm.concession ||
            !registerForm.price ||
            !registerForm.km ||
            !registerForm.year
          }
          onSave={() => handleSave()}
        />
      </Box>
    </LocalizationProvider>
  );
};
