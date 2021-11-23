import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MainNavMobile from "./MainNav/MainNavMobile";

const Header = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Typography
            variant="h1"
            component="h1"
            color="primary"
            sx={{ fontSize: "h6.fontSize", fontWeight: "bold", flexGrow: 1 }}
          >
            #whatsinmypantry
          </Typography>
          <MainNavMobile />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
