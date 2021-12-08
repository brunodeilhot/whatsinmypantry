import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MainNavList from "../MainNavList";
import About from "./About";

const MainNavMobile = () => {
  const [navState, setNavState] = useState(false);

  function toggleNav(e) {
    setNavState(!navState);
  }

  return (
    <>
      <IconButton
        onClick={toggleNav}
        edge="end"
        color="primary"
        disableRipple={true}
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
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={toggleNav}
            color="secondary"
            disableRipple={true}
            aria-label="close menu"
          >
            <CloseRounded sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
        <Box component="nav" role="navigation" onClick={toggleNav}>
          <MainNavList />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <About />
        </Box>
      </Drawer>
    </>
  );
};

export default MainNavMobile;
