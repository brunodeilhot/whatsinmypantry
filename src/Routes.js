import { Route, Routes } from "react-router";
import useMediaQuery from '@mui/material/useMediaQuery';
import App from "./App";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Starred from "./pages/starred/Starred";
import RecipeDetails from "./pages/recipes/components/RecipeDetails";
import ErrorPage from "./components/ErrorPage";

const MainRoutes = () => {

  const desktop = useMediaQuery('(min-width:600px)');

  return (
    <Routes>
      <Route path="/" element={<App />}>
        { desktop === false && <Route index element={<Home />} /> }
        <Route path="/recipes" element={<Recipes />}>
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
        <Route path="/starred" element={<Starred />}>
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
