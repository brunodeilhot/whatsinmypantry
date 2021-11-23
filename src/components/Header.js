import { MenuRounded } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            color="primary"
            sx={{ fontSize: "h6.fontSize", fontWeight: "bold", flexGrow: 1 }}
          >
            #whatsinmypantry
          </Typography>
          <IconButton edge="end" color="primary" disableRipple={true} aria-label="menu">
            <MenuRounded sx={{ fontSize: 50 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
