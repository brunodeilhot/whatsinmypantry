import RecipeCard from "./RecipeCard";
import { Grid } from "@mui/material";
import Loading from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";

const RecipeList = ({ recipes }) => {
  const dispatch = useDispatch();

  const starredRecipes = useSelector((state) => state.starredRecipes);

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
    <Grid key={recipe.id} item xs={2} sm={3} md={4}>
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
      {recipes.length === 0 ? (
        <Loading />
      ) : (
        <Grid
          container
          columns={{ xs: 4, sm: 9, md: 16 }}
          spacing={2}
          sx={{ p: 2 }}
        >
          {recipeList}
        </Grid>
      )}
    </>
  );
};

export default RecipeList;
