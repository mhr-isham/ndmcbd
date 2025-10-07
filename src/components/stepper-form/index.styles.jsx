import styled from "@emotion/styled";
import { Stepper } from "@mui/material";

export const StyledStepper = styled(Stepper)`
  & i {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
