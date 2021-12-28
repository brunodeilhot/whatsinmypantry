import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchRecByIng } from "../../services";
import NoRecipes from "./components/NoRecipes";
import RecipeList from "./components/RecipeList";
import Filters from "./components/Filters";
import ScrollTop from "../../components/ScrollTop";

const Recipes = ({ desktop }) => {
  const dispatch = useDispatch();

  const pantryState = useSelector((state) => state.myPantry);

  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(20);
  const [recipeLimit, setRecipeLimit] = useState(false);
  const [mealType, setMealType] = useState();
  const [diet, setDiet] = useState();

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
    if (totalRecipes === 100 || recipeLimit === true) {
      return;
    }
    setTotalRecipes(totalRecipes + 20);
  };

  const handleFilterChange = (e, name) => {
    if (name === "meal type") {
      return mealType === e.target.value
        ? setMealType(undefined)
        : setMealType(e.target.value);
    } else if (name === "dietary options") {
      return diet === e.target.value
        ? setDiet(undefined)
        : setDiet(e.target.value);
    }
  };

  useEffect(() => {
    if (pantryState.length > 0) {
      searchRecByIng(
        pantryState.toString(),
        mealType,
        diet,
        totalRecipes.toString(),
        (searchResults) => {
          if (searchResults === 402) {
            return dispatch({ type: "API_LIMIT", payload: true });
          }
          if (searchResults.length % 20 !== 0) {
            setRecipeLimit(true);
          }
          if (searchResults.length % 20 === 0) {
            setRecipeLimit(false);
          }
          dispatch({ type: "API_LIMIT", payload: false });
          setRecipes(searchResults);
        }
      );
    }

    // if (testRecipes.length > 0) {
    //   setRecipes(testRecipes);
    // }
  }, [pantryState, totalRecipes, dispatch, mealType, diet]);

  const filteredRecipes =
    recipes.length === 0 && (mealType !== undefined || diet !== undefined) ? (
      <NoRecipes filtered={true} />
    ) : (
      <InfiniteScroll
        dataLength={recipes}
        next={addRecipesScroll}
        hasMore={true}
      >
        <RecipeList recipes={recipes} mobileList={!desktop} />
      </InfiniteScroll>
    );

  return (
    <>
      {pantryState.length === 0 ? (
        <NoRecipes />
      ) : (
        <>
          <Filters
            handleFilterChange={handleFilterChange}
            mealType={mealType}
            diet={diet}
          />
          {filteredRecipes}
        </>
      )}
      <Outlet />
    </>
  );
};

export default Recipes;
