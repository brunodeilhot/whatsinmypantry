import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NoRecipes from "../recipes/components/NoRecipes";
import RecipeList from "../recipes/components/RecipeList";

const Starred = () => {
  const starredRecipes = useSelector((state) => state.starredRecipes);

  return (
    <>
      {starredRecipes.length === 0 ? (
        <NoRecipes starred={true} />
      ) : (
        <RecipeList recipes={starredRecipes} />
      )}
      <Outlet />
    </>
  );
};

export default Starred;
