import {
  TextField,
  InputAdornment,
  Tooltip,
  InputProps,
  Box,
} from "@mui/material";
import { Help, Loop, LoopOutlined, HourglassBottom } from "@mui/icons-material";

interface CustomInputProps extends InputProps {
  label: string;
  onChange: (
    v: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onIconClick?: (v: boolean) => void;
  showIcon?: boolean;
  isLoading?: boolean;
}

const spinAnimation =
  "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";

export const CustomInput = ({
  label,
  onChange,
  disabled,
  onIconClick = () => {},
  showIcon = false,
  name,
  value,
  isLoading = false,
}: CustomInputProps) => {
  return (
    <>
      <TextField
        label={label}
        onChange={(ev) => onChange(ev)}
        name={name}
        value={value}
        disabled={disabled}
        sx={{
          width: "100%",
          color: "#fff",
          "& .MuiFormLabel-root": {
            color: "#fff",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#FF472F",
          },
          "& .MuiFormLabel-root.Mui-hover": {
            color: "#FF472F",
          },
          "& .MuiFormLabel-root.Mui-disabled": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            "&.Mui-disabled": {
              border: "1px solid #FF472F",
            },
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
        InputProps={{
          endAdornment: showIcon && (
            <InputAdornment position="end">
              <Tooltip title={"Ver sugerencias de precio"} placement="top">
                {!isLoading ? (
                  <Help
                    sx={{ color: "#FF472F", cursor: "pointer" }}
                    onClick={(v) => onIconClick(true)}
                  />
                ) : (
                  <HourglassBottom
                    sx={{
                      color: "#FF472F",
                      display: "inline-block",
                      animation: "spin 2s linear infinite",
                      "@global": {
                        "@keyframes spin": {
                          "0%": { transform: "rotate(0deg)" },
                          "100%": { transform: "rotate(360deg)" },
                        },
                      },
                    }}
                  />
                )}
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
