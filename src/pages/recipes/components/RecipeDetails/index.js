import { Dialog, Grid, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getRecipeDetails } from "../../../../services";
import Header from "./Header";
import Intro from "./Intro";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Footer from "./Footer";
import Loading from "../../../../components/Loading";

const RecipeDetails = () => {
  let navigate = useNavigate();
  const { id } = useParams();

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
    sourceUrl
  } = recipeDetails;

  const handleTransition = () => {
    setOpen(false);
    setTimeout(handleClose, 800);
  };

  // Returns to recipes page
  // Didn't use (-1) so it doesn't rely on browser history
  // This way if users travel directly to this page they
  // get redirected to the recipe page instead of previous page
  const handleClose = () => {
    navigate("/recipes");
  };

  useEffect(() => {
    getRecipeDetails(id, (searchResults) => {
      setRecipeDetails(searchResults);
    });
  }, []);

  const details = (
    <Grid container>
      <Grid container item>
        <Header handleTransition={handleTransition} image={image} />
      </Grid>
      <Grid container item direction="column" alignItems="stretch" pl={2.5} pr={2.5}>
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
      fullScreen
      open={open}
      onClose={handleTransition}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up", timeout: 1000 }}
      hideBackdrop
    >
      {recipeDetails.length === 0 ? <Loading /> : details}
    </Dialog>
  );
};

export default RecipeDetails;
