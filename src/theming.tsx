import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    trello: {
      appBarHeight: string;
      boardBarHeight: string;
      boardBarContentHeight: string;
      headerHeight: string;
      footerHeight: string;
    };
  }
  interface ThemeOptions {
    trello?: {
      appBarHeight?: string;
      boardBarHeight?: string;
      boardBarContentHeight?: string;
      headerHeight?: string;
      footerHeight?: string;
    };
  }
}
const Header_Height = "50px";
const Footer_Height = "50px";
const AppBarHeight = "60px";
const BoardBarHeight = "50px";
const boardBarContentHeight = `calc( 100vh - ${AppBarHeight} - ${BoardBarHeight})`;
// A custom theme for this app
const theme = createTheme({
  // palette: {
  //   mode: "light", /// default là light
  //   primary: {
  //     main: "#556cd6",
  //   },
  //   secondary: {
  //     main: "#19857b",
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  // },
  spacing: (factor: number) => `${6 * factor}px`,
  colorSchemes: {
    light: true,
    dark: true,
  },
  trello: {
    appBarHeight: AppBarHeight,
    boardBarHeight: BoardBarHeight,
    boardBarContentHeight: boardBarContentHeight,
    headerHeight: Header_Height,
    footerHeight: Footer_Height,
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
            backgroundColor: "grey",
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
          borderWidth: "0.5px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.secondary.main,
          fontSize: "0.875rem",
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.secondary.main,
          fontSize: "0.875rem",
          "& label.Mui-focused": {
            // color: "white !important",
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiTypography-body1": {
            fontSize: "0.875rem",
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            // color: theme.palette.secondary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              // borderColor: `${theme.palette.secondary.main} !important`,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              // borderColor: theme.palette.secondary.main,
            },
            "& fieldset": {
              borderWidth: "0.5px !important", /// Công dụng khi click vào thẻ input thì viền chỉ border 0.5px
            },
            "&:hover fieldset": {
              borderWidth: "1.5px !important",
            },
            "& .Mui-focused fieldset": {
              borderWidth: "1.5px !important",
            },
          };
        },
      },
    },
  },
});

export default theme;
