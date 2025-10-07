import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CleanButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 6px;
  font-size: 0.8rem;
  padding: 15px 10px;
  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 1rem;
  }
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  position: relative;
  /* transition: background-image 0.4s ease; */

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.palette.primary.main};
  }

  &:active {
    transform: scale(0.96);
  }
`;

export default CleanButton;
