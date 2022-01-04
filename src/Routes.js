import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import App from "./App";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import Starred from "./pages/starred";
import About from "./pages/about";
import RecipeDetails from "./pages/recipes/components/RecipeDetails";
import ErrorPage from "./components/ErrorPage";

const MainRoutes = () => {
  const dispatch = useDispatch();

  // Media query management of the app
  const desktop = useMediaQuery("(min-width:700px)");
  const desktopLg = useMediaQuery("(min-width:1200px)");

  useEffect(() => {
    dispatch({
      type: "MEDIAQUERY",
      payload: { desktop: desktop, desktopLg: desktopLg },
    });
  }, [desktop, desktopLg, dispatch]);

  // Checks the user default mode on system or browser settings
  // Saves that setting in the store
  const preferedMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    dispatch({ type: "PREFERED_THEME_MODE", payload: preferedMode });
  }, [dispatch, preferedMode]);

  const recipeDetails = <Route path=":id" element={<RecipeDetails />} />;

  return (
    <Routes>
      <Route path="/" element={<App />}>
        {!desktop && <Route index element={<Home />} />}
        <Route path="recipes" element={<Recipes />}>
          {recipeDetails}
        </Route>
        <Route path="starred" element={<Starred />}>
          {recipeDetails}
        </Route>
        {desktop && <Route path="about" element={<About />} />}
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
