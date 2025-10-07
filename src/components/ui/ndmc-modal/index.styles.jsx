import styled from "@emotion/styled";
import { Dialog } from "@mui/material";
import { BluredBackground } from "../../styles/StylePresets";

export const StyledNdmcDialog = styled(Dialog)`
  /* max-width: 100vw; */

  ${(props) => {
    if (props.variant === "aesthetic") {
      if (props.theme.palette.mode === "dark") {
        return `
        .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper {
          background: linear-gradient(45deg, rgba(61, 58, 95, 0.52), transparent) !important;
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        
        `;
      } else {
        return `
        .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper {
          background: linear-gradient(45deg, #9a94e29f, #ffffff)!important;
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        
        
        `;
      }
    }
  }}
`;
