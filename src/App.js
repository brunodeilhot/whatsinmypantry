import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import MainRoutes from './Routes';

const theme = createTheme({
  typography: {
      button: {
          textTransform: 'none'
      }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#7FD7C3'
    },
    text: {
      primary: '#383A47',
      secondary: '#ffffff',
    },
    background: {
      default: '#FAFAFA',
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
    <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
