import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import EmptyPantry from "./EmptyPantry";
import IngredientChip from "./IngredientChip";

const MyPantry = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.myPantry);

  function removeIngredient(e, ingredient) {
    dispatch({ type: "REMOVE_INGREDIENT", payload: ingredient });
  }

  const ingredientList = ingredients.map((ingredient) => (
    <Grid item key={ingredient} >
      <IngredientChip ingredient={ingredient} removeIngredient={removeIngredient} />
    </Grid>
  ));

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container spacing={1} direction="column" sx={{ maxWidth: "80%", mt: 4, overflow: "scroll" }}>
        {ingredients.length === 0 ? <EmptyPantry /> : ingredientList}
      </Grid>
    </Box>
  );
};

export default MyPantry;
