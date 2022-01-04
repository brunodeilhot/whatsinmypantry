import { Fade, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import EmptyPantry from "./EmptyPantry";
import IngredientChip from "./IngredientChip";

const MyPantry = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.myPantry);

  const removeIngredient = (e, ingredient) => {
    const ingIndex = ingredients.indexOf(ingredient);
    dispatch({ type: "REMOVE_INGREDIENT", payload: ingIndex });
  }

  const ingredientList = ingredients.map((ingredient) => (
    <Fade key={ingredient}>
      <Grid item>
        <IngredientChip
          ingredient={ingredient}
          removeIngredient={removeIngredient}
        />
      </Grid>
    </Fade>
  ));

  return (
    <Grid container justifyContent="center" mb={2}>
      {ingredients.length === 0 ? (
        <EmptyPantry />
      ) : (
        <Grid container item spacing={1} maxWidth="80%">
          <TransitionGroup component={null}>{ingredientList}</TransitionGroup>
        </Grid>
      )}
    </Grid>
  );
};

export default MyPantry;
