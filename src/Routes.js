import { Route, Routes } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import NotFound from "./pages/notfound/NotFound";
import Starred from "./pages/starred/Starred";
import RecipeDetails from "./pages/recipes/RecipeList/RecipeDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<Recipes />}>
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
        <Route path="/starred" element={<Starred />}>
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
