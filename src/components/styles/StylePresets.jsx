import { useTheme } from "@emotion/react";

export const BluredBackground = () => {
  const theme = useTheme();

  return `
  
background: ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.0257)"
      : "rgba(255, 255, 255, 0.3)"
  };
  border-radius:10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  
  `;
};

// backdrop-filter: blur(15.5px);
// --webkit-backdrop-filter: blur(15.5px);

export const typography = {
  xxl: "3.5",
  xl: "3",
  lg: "2.5",
  md: "2",
  lmd: "1.9",
  gsm: "1.85",
  sm: "1.5",
  lsm: "1.3",
  xs: "1",
  xxs: ".8",
};

export const fontWeight = {
  xBold: 700,
  bold: 500,
  light: 300,
  xLight: 200,
};
