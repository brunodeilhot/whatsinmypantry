import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { Drawer, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MainNavList from "./MainNavList";
import About from "../../pages/about";
import ThemeButton from "../ThemeButton";

const MainNavMobile = () => {
  // State management and function that controls the open/close of the
  // mobile menu drawer
  const [navState, setNavState] = useState(false);

  function toggleNav() {
    setNavState(!navState);
  }

  return (
    <>
      <IconButton
        onClick={toggleNav}
        edge="end"
        color="primary"
        aria-label="menu"
      >
        <MenuRounded sx={{ fontSize: 50 }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={navState}
        onClose={toggleNav}
        PaperProps={{
          sx: { backgroundColor: "primary.main", maxWidth: "70%" },
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item ml={1}>
            <ThemeButton />
          </Grid>
          <IconButton
            onClick={toggleNav}
            color="secondary"
            aria-label="close menu"
          >
            <CloseRounded sx={{ fontSize: 50 }} />
          </IconButton>
        </Grid>
        <Box component="nav" role="navigation" onClick={toggleNav}>
          <MainNavList />
        </Box>
        <About />
      </Drawer>
    </>
  );
};

export default MainNavMobile;
