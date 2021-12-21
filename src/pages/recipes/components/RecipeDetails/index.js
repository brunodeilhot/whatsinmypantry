import { Dialog, Grid, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useMatch } from "react-router";
import { getRecipeDetails } from "../../../../services";
import Header from "./Header";
import Intro from "./Intro";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Footer from "./Footer";
import Loading from "../../../../components/Loading";
import { useDispatch } from "react-redux";

const RecipeDetails = ({ desktop }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const matchRecipes = useMatch("recipes/*");

  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [recipeDetails, setRecipeDetails] = useState([]);

  const {
    image,
    title,
    readyInMinutes,
    healthScore,
    glutenFree,
    dairyFree,
    vegan,
    vegetarian,
    extendedIngredients,
    servings,
    analyzedInstructions,
    sourceName,
    sourceUrl,
  } = recipeDetails;

  const handleTransition = () => {
    setOpen(false);
    setTimeout(handleClose, 800);
  };

  // Closing the Recipe Details page will return to previous page
  // wether that page was starred or recipes, even if the user
  // came from outside the app
  const handleClose = () => {
    if (matchRecipes) {
      return navigate("/recipes");
    }
    navigate("/starred");
  };

  useEffect(() => {
    getRecipeDetails(id, (searchResults) => {
      if (searchResults === 402) {
        return dispatch({ type: "API_LIMIT", payload: true });
      }
      dispatch({ type: "API_LIMIT", payload: false });
      setRecipeDetails(searchResults);
    });
  }, [dispatch, id]);

  const details = (
    <Grid container>
      <Grid container item>
        <Header handleTransition={handleTransition} image={image} />
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="stretch"
        pl={2.5}
        pr={2.5}
      >
        <Intro
          title={title}
          readyInMinutes={readyInMinutes}
          healthScore={healthScore}
          glutenFree={glutenFree}
          dairyFree={dairyFree}
          vegetarian={vegetarian}
          vegan={vegan}
        />
        <Ingredients
          extendedIngredients={extendedIngredients}
          servings={servings}
        />
        <Instructions analyzedInstructions={analyzedInstructions} />
        <Footer sourceName={sourceName} sourceUrl={sourceUrl} />
      </Grid>
    </Grid>
  );

  return (
    <Dialog
      aria-labelledby="recipe-details-title"
      open={open}
      onClose={handleTransition}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up", timeout: 1000 }}
      fullScreen={!desktop}
      hideBackdrop={!desktop}
    >
      {recipeDetails.length === 0 ? <Loading /> : details}
    </Dialog>
  );
};

export default RecipeDetails;
