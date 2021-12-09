import { CloseRounded } from "@mui/icons-material";
import { Dialog, Grid, IconButton, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getRecipeDetails } from "../../../../services";
import Header from "./Header"
import Intro from "./Intro"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"
import Footer from "./Footer"


const RecipeDetails = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [open, setOpen] = useState(true);
  const [recipeDetails, setRecipeDetails] = useState([]);

  const { image } = recipeDetails;

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

  return (
    <Dialog
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      fullScreen
      open={open}
      onClose={handleTransition}
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up", timeout: 1000 }}
      hideBackdrop
    >
      <Grid
        container
        direction="column"
        alignItems="stretch"
      >
        <Grid container item>
          <Header handleTransition={handleTransition} image={image} />
        </Grid>
        <Grid container item>
          <Intro />
        </Grid>
        <Grid container item>
          <Ingredients />
        </Grid>
        <Grid container item>
          <Instructions />
        </Grid>
        <Grid container item>
          <Footer />
        </Grid>
      </Grid>
      {/* <Box sx={{ p: 2 }}>
        <IconButton
          aria-label="close"
          color="primary"
          onClick={handleTransition}
        >
          <CloseRounded />
        </IconButton>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Recipe #{id} Details
        </Typography>
        <Typography
          id="transition-modal-description"
          sx={{ mt: 2, mb: 2 }}
        ></Typography>
      </Box> */}
    </Dialog>
  );
};

export default RecipeDetails;
