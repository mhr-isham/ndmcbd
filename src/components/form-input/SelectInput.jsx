import {
  FormError,
  FormField,
  FormGroup,
  FormIcon,
  FormLabel,
  FormSelect,
} from "./index.styles.jsx";
import { MenuItem } from "@mui/material";

const Select = ({
  name,
  label,
  value,
  placeholder,
  iconClass,
  errorMsg,
  touched,
  options,
  handleFoucse,
  handleChange,
  handleBlur,
  ...props
}) => {
  return (
    <FormGroup>
      <FormField>
        <FormLabel htmlFor={name} errorMsg={errorMsg}>
          {label}
        </FormLabel>
        <FormSelect
          labelId="demo-simple-select-label"
          value={value}
          name={name}
          errorMsg={errorMsg}
          touched={touched}
          onChange={(e) => {
            handleChange(e, name);
          }}
          onBlur={(e) => handleBlur(e, name)}
          label={label}
          onFocus={(e) => {
            handleFoucse(e, name);
          }}
          {...props}
        >
          <MenuItem value={""} selected>{`Select your ${label}`}</MenuItem>
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.key}
            </MenuItem>
          ))}
        </FormSelect>

        <FormIcon className={iconClass} errorMsg={errorMsg}></FormIcon>

        {errorMsg && (
          <FormError>
            <i className="ri-error-warning-fill"></i>
            <span>{errorMsg}</span>
          </FormError>
        )}
      </FormField>
    </FormGroup>
  );
};

export default Select;
