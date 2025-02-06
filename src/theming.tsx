import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
    };
  }
  interface ThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
    };
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light", /// default là light
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  // spacing: (factor: number) => `${0.25 * factor}rem`,
  colorSchemes: {
    light: true,
    dark: true,
  },
  trello: {
    appBarHeight: "60px",
    boardBarHeight: "40px",
  },

  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
