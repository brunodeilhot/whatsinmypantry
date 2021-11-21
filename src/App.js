import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import MainRoutes from './Routes';

const theme = createTheme({
  typography: {
      button: {
          textTransform: 'none'
      }
  }
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
