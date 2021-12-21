import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      "&:hover": {
        backgroundColor: "none",
      },
    },
  },
  palette: {
    primary: {
      main: "#7FD7C3",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#383A47",
      secondary: "#E5E5E5",
    },
    background: {
      paper: "#FAFAFA",
      default: "#FAFAFA",
    },
    divider: "rgba(255, 255, 255, 0.3)",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: true,
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

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
