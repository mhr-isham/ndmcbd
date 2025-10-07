import styled from "@emotion/styled";
import { Drawer } from "@mui/material";

const GlassyDrawer = styled(Drawer)(
  ({ theme }) => `
background-color: transparent;
& .MuiDrawer-paper {
  background: ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(255, 255, 255, 0.3)"
  };
  border-radius: 16px 0px 0px 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15.5px);
  --webkit-backdrop-filter: blur(15.5px);
}
& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
  background-color: transparent;
}
`
);

export default GlassyDrawer;
