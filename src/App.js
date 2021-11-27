import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
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
      paper: '#FAFAFA',
      default: '#FAFAFA'
    },
    divider: 'rgba(255, 255, 255, 0.3)'
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: true
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: "transparent"
          }
        }
      }
    }
  }
});

const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default'}}>
      <Header />
      <Outlet />
      <ActionButtons />
      </Box>
    </ThemeProvider>
  );
}

export default App;
