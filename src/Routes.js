import { Route, Routes } from "react-router";
import useMediaQuery from "@mui/material/useMediaQuery";
import App from "./App";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Starred from "./pages/starred/Starred";
import RecipeDetails from "./pages/recipes/components/RecipeDetails";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";

const MainRoutes = () => {
  const desktop = useMediaQuery("(min-width:700px)");
  const desktopLg = useMediaQuery("(min-width:1200px)");

  return (
    <Routes>
      <Route path="/" element={<App desktop={desktop} desktopLg={desktopLg} />}>
        {!desktop && <Route index element={<Home desktop={desktop} />} />}
        <Route path="recipes" element={<Recipes desktop={desktop} />}>
          <Route path=":id" element={<RecipeDetails desktop={desktop} />} />
        </Route>
        <Route path="starred" element={<Starred desktop={desktop} />}>
          <Route path=":id" element={<RecipeDetails desktop={desktop} />} />
        </Route>
        {desktop && (
          <Route path="about" element={<About desktop={desktop} />} />
        )}
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
