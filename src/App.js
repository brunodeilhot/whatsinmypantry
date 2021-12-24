import { Drawer, ThemeProvider, Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useMatch } from "react-router";
import { useParentWidth } from "./Utils";
import responsiveTheme from "./Theme";
import ActionButtons from "./components/ActionButtons";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/home/Home";

const App = ({ desktop, desktopLg }) => {
  const apiLimit = useSelector((state) => state.apiLimitReached);
  const navigate = useNavigate();
  const matchRoute = useMatch("/");

  useEffect(() => {
    if (desktop && matchRoute) {
      navigate("recipes");
    }
  }, [desktop, matchRoute, navigate]);

  const bodyRef = useRef();
  const bodyWidth =  useParentWidth(bodyRef);

  const drawerWidth = desktopLg ? (bodyWidth * 0.3).toString() + "px" : (bodyWidth * 0.4).toString() + "px";

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
      <Box ref={bodyRef} minHeight="100vh" backgroundColor="background.default">
        <Header desktop={desktop} desktopLg={desktopLg} />
        {desktop && (
          <PermanentDrawer variant="permanent">
            <Toolbar />
            <Box overflow="auto">
              <Home desktop={desktop} />
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
