import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchRecByIng } from "../../services";
import NoRecipes from "./components/NoRecipes";
import RecipeList from "./components/RecipeList";

const Recipes = () => {
  const dispatch = useDispatch();

  const pantryState = useSelector((state) => state.myPantry);
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(20);
  const [offset, setOffset] = useState(0);

  const testRecipes = [
    {
      id: 643514,
      usedIngredientCount: 1,
      missedIngredientCount: 6,
      likes: 0,
      title: "Fresh Herb Omelette",
      image: "https://spoonacular.com/recipeImages/643514-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 633595,
      usedIngredientCount: 1,
      missedIngredientCount: 7,
      likes: 0,
      title: "Baked Eggs With Asparagus and Sun Dried Tomatoes",
      image: "https://spoonacular.com/recipeImages/633595-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 659604,
      usedIngredientCount: 1,
      missedIngredientCount: 8,
      likes: 0,
      title: "Scrambled tofu with rocket",
      image: "https://spoonacular.com/recipeImages/659604-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 656481,
      usedIngredientCount: 1,
      missedIngredientCount: 8,
      likes: 0,
      title: "Poached Egg With Spinach and Tomato",
      image: "https://spoonacular.com/recipeImages/656481-312x231.jpg",
      imageType: "jpg",
    },
  ];

  const addRecipesScroll = () => {
    if (totalRecipes === 100) {
      return
    }
    setTotalRecipes(totalRecipes + 20);
  };

  useEffect(() => {
    if (pantryState.length > 0) {
      searchRecByIng(
        pantryState.toString(),
        offset.toString(),
        totalRecipes.toString(),
        (searchResults) => {
          if (searchResults === 402) {
            return dispatch({ type: "API_LIMIT", payload: true });
          }
          dispatch({ type: "API_LIMIT", payload: false });
          setRecipes(searchResults);
        }
      );
    }

    // if (testRecipes.length > 0) {
    //   setRecipes(testRecipes);
    // }
  }, [pantryState, offset, totalRecipes, dispatch]);

  return (
    <>
      {pantryState.length === 0 ? (
        <NoRecipes />
      ) : (
        <InfiniteScroll
          dataLength={recipes}
          next={addRecipesScroll}
          hasMore={true}
        >
          <RecipeList recipes={recipes} />
        </InfiniteScroll>
      )}

      <Outlet />
    </>
  );
};

export default Recipes;
