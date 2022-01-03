import { CssBaseline, Drawer, ThemeProvider, Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useMatch } from "react-router";
import { useParentWidth } from "./Utils";
import responsiveTheme from "./Theme";
import ActionButtons from "./components/ActionButtons";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/home";

const App = () => {
  const navigate = useNavigate();
  const { desktop, desktopLg } = useSelector((state) => state.mediaqueries);
  const apiLimit = useSelector((state) => state.apiLimitReached);

  // Home page (ingredient search) is only present as a standalone
  // in the mobile version, for desktop the user is redirected to
  // the recipes page
  const matchRoute = useMatch("/");

  useEffect(() => {
    if (desktop && matchRoute) {
      navigate("recipes");
    }
  }, [desktop, matchRoute, navigate]);

  // For the desktop version the home page is presented as a permanent
  // left positioned drawer and its width is rendered dynamically
  // based on the referenced width of the body
  const bodyRef = useRef();
  const bodyWidth = useParentWidth(bodyRef);

  const drawerWidth = desktopLg
    ? (bodyWidth * 0.3).toString() + "px"
    : (bodyWidth * 0.4).toString() + "px";

  const PermanentDrawer = styled(Drawer)({
    "& .MuiDrawer-docked": {
      width: drawerWidth,
      flexShrink: 0,
    },
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      zIndex: 1050,
    },
  });

  const outlet = desktop ? (
    <Box ml={drawerWidth}>
      <Outlet />
    </Box>
  ) : (
    <Outlet />
  );

  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      <Box ref={bodyRef} minHeight="100vh" backgroundColor="background.default">
        <Header desktop={desktop} desktopLg={desktopLg} />
        {desktop && (
          <PermanentDrawer variant="permanent">
            <Toolbar />
            <Box overflow="auto">
              <Home />
            </Box>
          </PermanentDrawer>
        )}
        {apiLimit ? <ErrorPage apiLimit={apiLimit} /> : outlet}
        {!desktop && <ActionButtons />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
