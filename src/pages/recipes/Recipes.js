import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchRecByIng } from "../../services/api";
import NoRecipes from "./NoRecipes";
import RecipeList from "./RecipeList";

const Recipes = () => {
  const pantryState = useSelector((state) => state.myPantry);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (pantryState.length > 0) {
      searchRecByIng(pantryState.toString(), (searchResults) => {
        setRecipes(searchResults);
      });
    }
  }, [pantryState]);

  return (
    <>
      {pantryState.length === 0 ? (
        <NoRecipes />
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </>
  );
};

export default Recipes;
