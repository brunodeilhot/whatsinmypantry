import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

const lightTheme = createTheme(baseTheme, {
  palette: {
    primary: {
      main: "#7FD7C3",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#383A47",
      secondary: "#C4C4C4",
    },
    background: {
      paper: "#FAFAFA",
      default: "#FAFAFA",
    },
    divider: "rgba(255, 255, 255, 0.3)",
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#FFFFFF",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme(baseTheme, {
  palette: {
    primary: {
      main: "#7FD7C3",
    },
    secondary: {
      main: "#383A47",
    },
    text: {
      primary: "#EFEFEF",
      secondary: "#C4C4C4",
    },
    background: {
      paper: "#4D4F61",
      default: "#383A47",
    },
    divider: "rgba(0, 0, 0, 0.3)",
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#383A47",
          },
        },
      },
    },
  },
});

export const responsiveLightTheme = responsiveFontSizes(lightTheme);
export const responsiveDarkTheme = responsiveFontSizes(darkTheme);

const themes = {
  responsiveLightTheme,
  responsiveDarkTheme
}

export default themes;