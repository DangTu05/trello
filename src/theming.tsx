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
  spacing: (factor: number) => `${6 * factor}px`,
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "silver",
            borderRadius: 8,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#556cd6",
          },
        },
      },
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          fontSize: "0.875rem",
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          fontSize: "0.875rem",
          "& label.Mui-focused": {
            color: "white !important",
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.secondary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: `${theme.palette.secondary.main} !important`,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.main,
            },
            "& fieldset": {
              borderWidth: "3px !important", /// Công dụng khi click vào thẻ input thì viền chỉ border 1px
            },
          };
        },
      },
    },
  },
});

export default theme;
