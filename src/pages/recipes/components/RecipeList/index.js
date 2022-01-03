import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import Loading from "../../../../components/Loading";
import ScrollTop from "../../../../components/ScrollTop";

const RecipeList = ({ recipes, desktop }) => {
  const dispatch = useDispatch();
  const starredRecipes = useSelector((state) => state.starredRecipes);

  // Function that controls when a user adds or removes a starred recipe
  // Starred recipes ids are stored globally and in local storage
  const toggleStarred = (e, starred) => {
    const checkIndex = starredRecipes.findIndex(
      (recipe) => recipe.id === starred.id
    );

    if (checkIndex !== -1) {
      return dispatch({ type: "REMOVE_STARRED", payload: checkIndex });
    }
    dispatch({ type: "ADD_STARRED", payload: starred });
  };

  const recipeList = recipes.map((recipe) => (
    <Grid key={recipe.id} container item xs={2} md={3} lg={4} xl={5}>
      <RecipeCard
        id={recipe.id}
        title={recipe.title}
        image={recipe.image}
        missingIng={recipe.missedIngredientCount}
        toggleStarred={toggleStarred}
        starredRecipes={starredRecipes}
      />
    </Grid>
  ));

  return (
    <>
      {recipeList.length === 0 ? (
        <Loading />
      ) : (
        <Grid
          container
          columns={{ xs: 4, md: 9, lg: 16, xl: 25 }}
          spacing={2}
          p={2}
        >
          {recipeList}
          <ScrollTop desktop={desktop} />
        </Grid>
      )}
    </>
  );
};

export default RecipeList;
