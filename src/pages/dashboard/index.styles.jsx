import styled from "@emotion/styled";
import { Accordion, Grid } from "@mui/material";
import { BluredBackground } from "../../components/styles/StylePresets";

export const DashBoardUserInfoPanel = styled.div`
  ${BluredBackground}
  display: flex;
  flex-direction: column;
  //  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  /* align-items: center; */
`;

export const DashboardUserPanel = styled(Grid)`
  ${BluredBackground}
  padding: 30px 20px;
`;
export const DashBoardUserImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledAccordion = styled(Accordion)`
  .MuiAccordionDetails-root {
    box-shadow: 0px 0px 1px -1px rgb(255 255 255 / 20%),
      0px 1px 1px 0px rgb(255 255 255 / 14%),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;
