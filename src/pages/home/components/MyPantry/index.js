import { Fade, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup } from 'react-transition-group';
import EmptyPantry from "./EmptyPantry";
import IngredientChip from "./IngredientChip";

const MyPantry = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.myPantry);

  function removeIngredient(e, ingredient) {
    dispatch({ type: "REMOVE_INGREDIENT", payload: ingredient });
  }

  const ingredientList = ingredients.map((ingredient) => (
    <Fade key={ingredient}>
    <Grid item>
      <IngredientChip ingredient={ingredient} removeIngredient={removeIngredient} />
    </Grid>
    </Fade>
  ));

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container spacing={1} direction="column" sx={{ maxWidth: "80%", mt: 4, overflow: "scroll" }}>
        {ingredients.length === 0 ? <EmptyPantry /> : <TransitionGroup>{ingredientList}</TransitionGroup>}
      </Grid>
    </Box>
  );
};

export default MyPantry;
