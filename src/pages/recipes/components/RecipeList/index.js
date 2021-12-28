import RecipeCard from "./RecipeCard";
import { Grid } from "@mui/material";
import Loading from "../../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import ScrollTop from "../../../../components/ScrollTop";

const RecipeList = ({ recipes, mobileList }) => {
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
    <Grid key={recipe.id} item xs={2} md={3} lg={4} xl={5}>
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
          sx={{ p: 2 }}
        >
          {recipeList}
          <ScrollTop mobileList={mobileList} />
        </Grid>
      )}
    </>
  );
};

export default RecipeList;
