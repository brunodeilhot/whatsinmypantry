import { useSelector } from "react-redux";
import NoRecipes from "../recipes/NoRecipes";
import RecipeList from "../recipes/RecipeList";

const Starred = () => {
  const starredRecipes = useSelector((state) => state.starredRecipes);

  return (
    <>
      {starredRecipes.length === 0 ? (
        <NoRecipes starred={true} />
      ) : (
        <RecipeList recipes={starredRecipes} />
      )}
    </>
  );
};

export default Starred;
