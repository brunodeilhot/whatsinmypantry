import { Fade, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import { useParentSize } from "../../../../Utils";
import EmptyPantry from "./EmptyPantry";
import IngredientChip from "./IngredientChip";

const MyPantry = ({ introRef, desktop }) => {
  const dispatch = useDispatch();
  const introSize = useParentSize(introRef);
  const introHeight =
    introSize === undefined ? 0 : introSize.height.toString() + "px";
  const ingredients = useSelector((state) => state.myPantry);

  const removeIngredient = (e, ingredient) => {
    const ingIndex = ingredients.indexOf(ingredient);
    dispatch({ type: "REMOVE_INGREDIENT", payload: ingIndex });
  };

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
    <Grid
      container
      justifyContent="center"
      position={desktop ? "static" : "absolute"}
      top={introHeight}
    >
      {ingredients.length === 0 ? (
        <EmptyPantry />
      ) : (
        <Grid container item spacing={1} maxWidth="80%" mt={!desktop && 8} mb={8} >
          <TransitionGroup component={null}>{ingredientList}</TransitionGroup>
        </Grid>
      )}
    </Grid>
  );
};

export default MyPantry;
