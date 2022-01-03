import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { searchRecByIng } from "../../services";
import NoRecipes from "./components/NoRecipes";
import RecipeList from "./components/RecipeList";
import Filters from "./components/Filters";

const Recipes = () => {
  const dispatch = useDispatch();
  const { desktop } = useSelector((state) => state.mediaqueries);
  const pantryState = useSelector((state) => state.myPantry);

  // Management of filter options in the recipe list
  const [mealType, setMealType] = useState();
  const [diet, setDiet] = useState();

  const handleFilterChange = (e, option) => {
    if (option === "meal type") {
      return mealType === e.target.value
        ? setMealType(undefined)
        : setMealType(e.target.value);
    } else if (option === "dietary options") {
      return diet === e.target.value
        ? setDiet(undefined)
        : setDiet(e.target.value);
    }
  };

  // Management of recipe list limit, recipes are loaded by scrolling
  // in blocks of 20 up to a maximum of 100
  const [totalRecipes, setTotalRecipes] = useState(20);
  const [recipeLimit, setRecipeLimit] = useState(false);

  const addRecipesScroll = () => {
    if (totalRecipes === 100 || recipeLimit === true) {
      return;
    }
    setTotalRecipes(totalRecipes + 20);
  };

  // - Api is called for a new list of recipes based on state changes
  // in the pantry(ingredient list), number of total recipes to be
  // loaded(scrolling the page), or changes in the filters
  // - If the number of results is less then the total recipes to be
  // loaded then recipe limit is set to true

  const [recipes, setRecipes] = useState([]);

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
  }, [pantryState, totalRecipes, dispatch, mealType, diet]);

  // If the filters chosen by the user returns no results then
  // a message is shown that there are no recipes available
  const filteredRecipes =
    recipes.length === 0 && (mealType !== undefined || diet !== undefined) ? (
      <NoRecipes filtered={true} />
    ) : (
      <InfiniteScroll
        dataLength={recipes}
        next={addRecipesScroll}
        hasMore={!recipeLimit}
      >
        <RecipeList recipes={recipes} desktop={desktop} />
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
