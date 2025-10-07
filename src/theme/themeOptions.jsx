import { colorPalette } from "./colorPalettes";

const themeOptions = (mode) => {
  const modeBasePalette = (mode) => {
    if (mode === "light") {
      // Light mode design
      return {
        background: {
          default: "##fbfbfb",
          paper: "#ffffff",
        },
        text: {
          main: "#000",
          light: "#545454",
          lowLight: "#4f4e4e",
          hint: "#3e25b9",
        },
      };
    } else if (mode === "dark") {
      return {
        // Dark Mode design
        background: {
          default: "#14141a",
          paper: "rgba(20, 20, 26, 1)",
        },
        text: {
          main: "#fff",
          light: "#ddd",
          lowLight: "#bfbfbf",
          hint: "#3e25b9",
        },
      };
    }
  };

  return {
    palette: {
      // General Theming
      mode: mode,
      primary: {
        ...colorPalette.purple,
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#1976d2",
      },

      error: {
        main: "#d32f2f",
        light: "#961b1b",
      },
      success: {
        main: "#21e82a",
      },
      borderColor: "#a0a4a7",
      ...modeBasePalette(mode),
    },
    typography: {
      fontFamily: "Inter",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1240,
        xl: 1536,
      },
    },
  };
};

export default themeOptions;
