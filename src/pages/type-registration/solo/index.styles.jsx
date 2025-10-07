import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const EventSegmentBox = styled.div`
  margin: 20px auto;
  width: fit-content;
  padding: 0px 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledEventBox = styled(Box)`
  width: 100%;
  ${(props) => props.theme.breakpoints.up("sm")} {
    width: 70%;
  }
`;
