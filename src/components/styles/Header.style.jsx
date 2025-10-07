import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";

export const TopBar = styled(AppBar)(() => {
  // const trigger = useScrollTrigger();
  const theme = useTheme();
  let CustomBackground;
  if (theme.palette.mode === "dark") {
    CustomBackground = {
      background: " rgba(20, 20, 26, 0.32)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(7.4px)",
      WebkitBackdropFilter: "blur(7.4px)",
    };
  } else {
    CustomBackground = {
      background: "rgba(255, 255, 255, 0.32)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1);",
      backdropFilter: "blur(7.4px)",
      WebkitBackdropFilter: "blur(7.4px)",
    };
  }

  return {
    ...CustomBackground,
  };
});

export const StyledToolbar = styled(Toolbar)`
  padding: 10px 0px;
`;

// export const Styled

export const LogoContainer = styled(Box)`
  flex-grow: 1;
  height: 60px;
`;

export const NavMenuContainer = styled(Box)`
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  ${(props) => props.theme.breakpoints.up("xs")} {
    display: none;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    display: flex;
  }
`;

export const HamburgerContainer = styled(Box)`
  display: block;
  text-align: center;
  ${(props) => props.theme.breakpoints.up("md")} {
    display: none;
  }
`;

export const NavIconBox = styled(Box)`
  display: flex;
  gap: 1rem;
  ${(props) => props.theme.breakpoints.up("md")} {
    display: none;
  }
`;
