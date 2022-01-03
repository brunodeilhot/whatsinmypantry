import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
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
      secondary: "#C4C4C4",
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
