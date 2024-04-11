import { TextField, InputAdornment, Tooltip, InputProps } from "@mui/material";
import { Help, HourglassBottom } from "@mui/icons-material";

interface CustomInputProps extends InputProps {
  label: string;
  onChange: (
    v: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onIconClick?: (v: boolean) => void;
  showIcon?: boolean;
  isLoading?: boolean;
}

export const CustomInput = ({
  label,
  onChange,
  disabled,
  onIconClick = () => {},
  showIcon = false,
  name,
  value,
  isLoading = false,
  type,
  id,
}: CustomInputProps) => {
  return (
    <>
      <TextField
        label={label}
        onChange={(ev) => onChange(ev)}
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        autoComplete="off"
        id={id}
        sx={{
          width: "100%",
          color: "#fff",
          "& .MuiFormLabel-root": {
            color: "#fff",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#FF472F",
          },
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FF472F",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FF472F",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FF472F",
            },
          },
          "& input:valid": {
            backgroundColor: "#000 !important",
          },
          "& input:invalid": {
            backgroundColor: "#000 !important",
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #000 inset",
            WebkitTextFillColor: "#fff",
          },
          "& input::-webkit-input-placeholder": {
            color: "#fff",
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
