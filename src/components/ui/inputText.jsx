import { FilledInput, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

const InputText = ({ title, type, endAdornment, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password">{title}</InputLabel>

      <FilledInput
        id="filled-adornment-password"
        type={type}
        {...props}
        endAdornment={endAdornment}
      />
    </FormControl>
  );
};

export default InputText;
