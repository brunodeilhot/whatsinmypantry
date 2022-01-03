import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import MainNavList from "./MainNav/MainNavList";
import MainNavMobile from "./MainNav/MainNavMobile";

const Header = ({ desktop, desktopLg }) => (
  <>
    <AppBar
      color={desktop ? "primary" : "inherit"}
      elevation={!desktop ? 0 : 4}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="h1"
          color={desktop ? "secondary" : "primary"}
          fontWeight={700}
          flexGrow={1}
        >
          #whatsinmypantry
        </Typography>
        {desktop ? (
          <Box component="nav" role="navigation">
            <MainNavList desktop={desktop} desktopLg={desktopLg} />
          </Box>
        ) : (
          <MainNavMobile />
        )}
      </Toolbar>
    </AppBar>
    <Toolbar id="back-to-top-anchor" />
  </>
);

export default Header;
