import {
  FormGroup,
  StyledAutoComplete,
  StyledTextField,

  // StyledAutoComplete,
} from "./index.styles.jsx";

import {
  FormError,
  FormField,
  FormIcon,
  FormInput,
  FormLabel,
  // StyledAutoComplete,
} from "../index.styles.jsx";
import { createFilterOptions } from "@mui/material";
const filter = createFilterOptions();
const AutoComplete = ({
  name,
  label,
  value,
  iconClass,
  errorMsg,
  placeholder,
  touched,
  options,
  handleBlur,
  handleFoucse,
  focused,
  changeTypedValue,
  handleChange,
}) => {
  return (
    <FormGroup>
      <FormField>
        <FormLabel htmlFor={name} errorMsg={errorMsg}>
          {label}
        </FormLabel>
        <StyledAutoComplete
          disablePortal
          freeSolo
          options={options ? [...options] : []}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300, borderRadius: "2rem" }}
          value={value}
          onFocus={(e) => handleFoucse(e, name)}
          errorMsg={errorMsg}
          touched={touched}
          focused={focused}
          onInputChange={(e, newInput) => {
            handleChange(e, "institution", newInput);
            changeTypedValue(newInput);
          }}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              handleChange(event, "institution", newValue);
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              // when any one add a new Institution name
              handleChange(event, "institution", newValue.inputValue);
            } else {
              // when we select from the list
              if (typeof newValue === "object") {
                handleChange(event, "institution", newValue?.title);
              }
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) =>
                inputValue.toLocaleLowerCase() ===
                option.title.toLocaleLowerCase()
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          // options={top100Films}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              onBlur={(e) => handleBlur(e, "institution")}
              onFocus={(e) => handleFoucse(e, "institution")}
              // label={label}
            />
          )}
        />

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

export default AutoComplete;
