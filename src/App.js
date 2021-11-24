import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router';
import ActionButtons from './components/ActionButtons';
import Header from './components/Header';


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
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#383A47',
      secondary: '#E5E5E5'
    },
    background: {
      default: '#FAFAFA',
      paper: '#FAFAFA'
    },
    divider: 'rgba(255, 255, 255, 0.3)'
  },
});

const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <Header />
      <Outlet />
      <ActionButtons />
    </ThemeProvider>
  );
}

export default App;
