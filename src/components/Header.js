import { AppBar, Toolbar, Typography } from "@mui/material";
import MainNavList from "./MainNav/MainNavList";
import MainNavMobile from "./MainNav/MainNavMobile";

const Header = ({ desktop, desktopLg }) => {
  return (
    <>
      <AppBar color={desktop ? "primary" : "inherit"} elevation={!desktop ? 0 : 4}>
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            color={desktop ? "secondary" : "primary"}
            sx={{ fontWeight: "bold", flexGrow: 1 }}
          >
            #whatsinmypantry
          </Typography>
          {desktop ? <MainNavList desktop={desktop} desktopLg={desktopLg} /> : <MainNavMobile />}
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Header;
