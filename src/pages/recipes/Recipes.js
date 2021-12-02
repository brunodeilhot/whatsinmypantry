import { useEffect, useState } from "react";
import { searchRecByIng } from "../../services/api";
import RecipesLoading from "./RecipesLoading"
import RecipeList from "./RecipeList";

const Recipes = () => {
  const [isLoading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setLoading(true)

    const testIngredients = ["tomato", "cheese", "chicken breast", "eggs"];

    searchRecByIng(testIngredients.toString(), (searchResults) => {
      setRecipes(searchResults)
    }).then(setLoading(false))

  }, []);

  
  return (
    <>
    {isLoading === true ? <RecipesLoading /> : <RecipeList recipes={recipes} />}
    </>
    );
};

export default Recipes;
