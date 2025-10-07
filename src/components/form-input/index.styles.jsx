import styled from "@emotion/styled";
import { BluredBackground, typography } from "../styles/StylePresets";
import { Select } from "@mui/material";

export const FormGroup = styled.div`
  position: relative;
  padding: 1rem 0rem 1.3rem 0rem;
  margin-bottom: 0.9rem;
`;

export const FormField = styled.div`
  position: relative;

  &::after {
    ${(props) => props.theme.breakpoints.down("sm")} {
      display: none;
    }
    content: "";
    position: absolute;
    height: 28px;
    border: 1px solid ${(props) => props.theme.palette.borderColor};
    left: 3.75rem;
    top: 0;
    bottom: 0;
    margin-block: auto;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border: 3px solid ${(props) => props.theme.palette.borderColor};
  padding: 1.4rem 1.4rem 1.4rem 4.5rem;
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 1.4rem 1.4rem 1.4rem 1.4rem;
  }
  border-radius: 2rem;
  position: relative;
  outline: none;
  font-weight: 500;
  transition: border-color 0.4s, box-shadow 0.4s;
  color: ${(props) => props.theme.palette.text.main};
  background: ${(props) =>
    props.theme.palette.mode === "dark" ? "#2c2c31" : "rgba(255, 255, 255, 1)"};
  &::placeholder {
    color: #36383a !important;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
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

export const FormTextArea = styled.textarea`
  width: 100%;
  border: 3px solid ${(props) => props.theme.palette.borderColor};
  padding: 1.4rem 1.4rem 1.4rem 4.5rem;
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 1.4rem 1.4rem 1.4rem 1.4rem;
  }
  border-radius: 2rem;
  position: relative;
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

export const FormSelect = styled(Select)`
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
  appearance: none;
  background: ${(props) =>
    props.theme.palette.mode === "dark" ? "#2c2c31" : "rgba(255, 255, 255, 1)"};

  .css-11kbpt-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover
    .MuiOutlinedInput-notchedOutline {
    border-color: none;
  }
  .css-g2j7hw-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    border-color: none;
  }

  & fieldset {
    border: none;
  }

  fieldset.MuiOutlinedInput-notchedOutline.css-9425fu-MuiOutlinedInput-notchedOutline {
    border: none;
  }
  fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
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
        box-shadow: 0 8px 24px hsl(244, 80%, 68%,.3) !important;
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

export const FormLabel = styled.label`
  position: absolute;
  left: 1.5rem;
  top: -0.75rem;
  z-index: 10;
  /* background: ${(props) =>
    props.theme.palette.mode === "dark"
      ? "#2c2c31"
      : "rgba(255, 255, 255, 1)"}; */

  background: ${(props) => props.theme.palette.primary.main};
  padding: 2px 4px 0px 4px;
  border-radius: 5px;
  font-size: ${() => `${typography.xs}rem`};
  font-weight: 500;
  /* color: ${(props) => props.theme.palette.text.main}; */
  color: #fff;
`;

export const FormIcon = styled.i`
  height: max-content;
  ${(props) => props.theme.breakpoints.down("sm")} {
    display: none;
  }
  font-size: 1.3rem;
  position: absolute;
  left: 1.5rem;
  top: 0;
  bottom: 0;
  margin-block: auto;
  ${(props) => {
    if (props.errorMsg) {
      return `color:${(props) => props.theme.palette.error.main}`;
    } else {
      return;
    }
  }}
`;

export const FormSelectIcon = styled.i`
  height: max-content;
  font-size: 1.3rem;
  position: absolute;
  right: 1.5rem;
  top: 0;
  bottom: 0;
  margin-block: auto;
`;

export const FormError = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: -1.6rem;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  color: ${(props) => props.theme.palette.error.main};
  pointer-events: none;
  /* opacity: 0; */
  transition: opacity 0.4s;
  /* margin-bottom: 10px; */
  & i {
    font-size: 1rem;
  }

  & span {
    font-size: ${() => `${typography.xs}rem`};
    font-weight: 500;
  }
`;

//  Select Design

export const OptionBox = styled.ul`
  z-index: 100;
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  bottom: -310px;
  left: 0;
  list-style: none;
  padding: 0.5rem 1rem;
  background: ${(props) =>
    props.theme.palette.mode === "dark"
      ? "rgba(44, 44, 49, 0.966)"
      : "rgba(255, 255, 255, 0.944)"};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(19.1px);
  -webkit-backdrop-filter: blur(19.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  ::-webkit-scrollbar {
    width: 10px;
    background: ${(props) =>
      props.theme.palette.mode === "dark"
        ? "#2c2c31"
        : "rgba(255, 255, 255, 1)"};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #ccc;
    width: 5px;
    /* height: 10px; */
  }

  & li {
    z-index: 10;
    padding: 5px 20px;

    &:hover {
      ${BluredBackground}
      cursor: pointer;
    }
  }
`;

export const StyledOption = styled.option`
  padding: 1rem 0.5rem;
`;
