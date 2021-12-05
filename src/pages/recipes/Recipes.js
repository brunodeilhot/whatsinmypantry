import { useEffect, useState } from "react";
import { searchRecByIng } from "../../services/api";
import NoRecipes from "./NoRecipes";
import RecipeList from "./RecipeList";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const testIngredients = ["tomato", "cheese", "chicken breast", "eggs"];

  useEffect(() => {

    searchRecByIng(testIngredients.toString(), (searchResults) => {
      setRecipes(searchResults)
    })

  }, []);

  
  return (
    <>
    {testIngredients.length === 0 ? <NoRecipes /> : <RecipeList recipes={recipes} />}
    </>
    );
};

export default Recipes;
