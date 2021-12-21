import { Dialog, Grid, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetails } from "../../../../services";
import Header from "./Header";
import Intro from "./Intro";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Footer from "./Footer";
import Loading from "../../../../components/Loading";
import ErrorPage from "../../../../components/ErrorPage";

const RecipeDetails = ({ desktop }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { desktop } = useSelector((state) => state.mediaqueries);

  // Manages the state of the recipe details page (open/close)
  const [open, setOpen] = useState(true);

  // When the user closes the details page a timeout is set to allow the
  // animation to complete
  const handleTransition = () => {
    setOpen(false);
    setTimeout(handleClose, 800);
  };

  // Closing the Recipe Details page will return to previous page
  // wether that page was starred or recipes, even if the user
  // came from outside the app
  const matchRecipes = useMatch("/recipes/*");

  const handleClose = () => {
    if (matchRecipes) {
      return navigate("/recipes");
    }
    navigate("/starred");
  };

  // Destructure of the id parameter used to get detailed recipe data from api
  const { id } = useParams();

  // If an id return no data then noResults is set to true and a message is displayed
  const [noResults, setNoResults] = useState(false);

  // State management of the recipe details data
  const [recipeDetails, setRecipeDetails] = useState([]);

  // Destructuring of the recipe details data received from the api
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

  useEffect(() => {
    getRecipeDetails(id, (searchResults) => {
      if (searchResults === 402) {
        return dispatch({ type: "API_LIMIT", payload: true });
      }
      dispatch({ type: "API_LIMIT", payload: false });

      if (searchResults === undefined) {
        return setNoResults(true);
      }
      setNoResults(false);

      setRecipeDetails(searchResults);
    });
  }, [dispatch, id]);

  // When the detaisl component is opened and while the data is unavailable
  // a loading animation is presented
  const details =
    recipeDetails.length === 0 ? (
      <Loading />
    ) : (
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
      {noResults ? <ErrorPage /> : details}
    </Dialog>
  );
};

export default RecipeDetails;
