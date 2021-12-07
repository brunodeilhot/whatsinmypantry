import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchRecByIng } from "../../services/api";
import NoRecipes from "./NoRecipes";
import RecipeList from "./RecipeList";

const Recipes = () => {
  const pantryState = useSelector((state) => state.myPantry);
  const [recipes, setRecipes] = useState([]);

  const testRecipes = [
    {
      id: 643514,
      usedIngredientCount: 1,
      missedIngredientCount: 6,
      likes: 0,
      title: "Fresh Herb Omelette",
      image: "https://spoonacular.com/recipeImages/643514-312x231.jpg",
      imageType: "jpg"
    },
    {
      id: 633595,
      usedIngredientCount: 1,
      missedIngredientCount: 7,
      likes: 0,
      title: "Baked Eggs With Asparagus and Sun Dried Tomatoes",
      image: "https://spoonacular.com/recipeImages/633595-312x231.jpg",
      imageType: "jpg"
    },
    {
      id: 659604,
      usedIngredientCount: 1,
      missedIngredientCount: 8,
      likes: 0,
      title: "Scrambled tofu with rocket",
      image: "https://spoonacular.com/recipeImages/659604-312x231.jpg",
      imageType: "jpg"
    },
    {
      id: 656481,
      usedIngredientCount: 1,
      missedIngredientCount: 8,
      likes: 0,
      title: "Poached Egg With Spinach and Tomato",
      image: "https://spoonacular.com/recipeImages/656481-312x231.jpg",
      imageType: "jpg"
    }
  ];

  useEffect(() => {
    // if (pantryState.length > 0) {
    //   searchRecByIng(pantryState.toString(), (searchResults) => {
    //     setRecipes(searchResults);
    //   });
    // }

    if (testRecipes.length > 0) {
      setRecipes(testRecipes);
    }

  }, []);

  return (
    <>
      {testRecipes.length === 0 ? (
        <NoRecipes />
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </>
  );
};

export default Recipes;
