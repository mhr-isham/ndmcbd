import styled from "@emotion/styled";
import { BluredBackground, typography } from "../../styles/StylePresets";
import { Autocomplete, Select, TextField } from "@mui/material";

export const FormGroup = styled.div`
  position: relative;
  padding: 1rem 0rem 1.3rem 0rem;
  margin-bottom: 0.5rem;
`;

export const StyledTextField = styled(TextField)`
  .css-9425fu-MuiOutlinedInput-notchedOutline {
    /* border-color: green; */
  }

  .Mui-focused {
    /* border-color: red;
    box-shadow: 0px 8px 3px blue; */
  }

  .css-1k9ipw3-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    /* border-color: blue; */
  }

  .MuiOutlinedInput-root {
    outline: none;
  }
  .MuiOutlinedInput-notchedOutline {
    outline: none;
    border: none;
  }

  & label.Mui-focused {
    display: none;
  }

  .MuiPopper-root {
    background: red;
  }

  .MuiFormControl-root {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 28px;
      border: 1px solid ${(props) => props.theme.palette.borderColor};
      left: 3.75rem;
      top: 0;
      bottom: 0;
      margin-block: auto;
    }
  }
  ::placeholder {
    color: hsl(200, 4%, 24%);
    font-size: 10px;
  }

  & label {
    /* width: 100%;
    height: max-content; */
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .css-18r7cgg-MuiFormLabel-root-MuiInputLabel-root {
    display: none;
  }

  .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.css-1htazlq-MuiAutocomplete-root
    .MuiOutlinedInput-roott {
    padding: 0px !important;
  }

  .MuiAutocomplete-hasPopupIcon.css-1htazlq-MuiAutocomplete-root
    .MuiOutlinedInput-root,
  .MuiAutocomplete-hasClearIcon.css-1htazlq-MuiAutocomplete-root
    .MuiOutlinedInput-root {
    padding: 0px;
  }

  &.MuiInputBase-root .css-1k9ipw3-MuiInputBase-root-MuiOutlinedInput-root {
    padding: 0px;
  }

  & .MuiInputBase-root {
    width: 100%;
    /* border: 3px solid ${(props) => props.theme.palette.borderColor}; */
    /* padding: 1.4rem 1.4rem 1.4rem 4.5rem; */
    border-radius: 2rem;
    outline: none;
    font-weight: 500;
    transition: border-color 0.4s, box-shadow 0.4s;
    color: ${(props) => props.theme.palette.text.main};
    background: ${(props) =>
      props.theme.palette.mode === "dark"
        ? "#2c2c31"
        : "rgba(255, 255, 255, 1)"};
    &::placeholder {
      color: hsl(200, 4%, 24%);
    }

    ${(props) => {
      if (props.errorMsg) {
        return `
        border-color: ${props.theme.palette.error.main};
        box-shadow: 0 8px 24px hsla(353, 64%, 53%, .3);
    `;
      } else {
        if (props.touched) {
          return `
        border-color: ${props.theme.palette.primary.light} ;
        box-shadow: 0 8px 24px hsl(244, 80%, 68%,.3);
      `;
        } else {
          return `
        border-color: ${props.theme.palette.borderColor};
        box-shadow: none;
        `;
        }
      }
    }}
  }
`;

export const StyledAutoComplete = styled(Autocomplete)`
  width: 100%;
  border: 3px solid ${(props) => props.theme.palette.borderColor};
  padding: 0px 0px 0px 4rem;
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 0px 0px 0px 1.4rem;
  }
  border-radius: 2rem;
  outline: none;
  font-weight: 500;
  transition: border-color 0.4s, box-shadow 0.4s;
  color: ${(props) => props.theme.palette.text.main};
  background: ${(props) =>
    props.theme.palette.mode === "dark" ? "#2c2c31" : "rgba(255, 255, 255, 1)"};
  &::placeholder {
    color: hsl(200, 4%, 24%);
  }

  ${(props) => {
    if (props.errorMsg) {
      return `
        border-color: ${props.theme.palette.error.main};
        box-shadow: 0 8px 24px hsla(353, 64%, 53%, .3);
    `;
    } else {
      if (props.touched) {
        return `
        border-color: ${props.theme.palette.primary.light} ;
        box-shadow: 0 8px 24px hsl(244, 80%, 68%,.3);
      `;
      } else {
        return `
        border-color: ${props.theme.palette.borderColor};
        box-shadow: none;
        `;
      }
    }
  }}
`;
