import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import IngredientList from "./IngredientList";
import Servings from "./Servings";
import UnitOptions from "./UnitOptions";

const Ingredients = ({ extendedIngredients, servings }) => {
  const [unit, setUnit] = useState("us");
  const [serving, setServing] = useState(servings);

  const handleUnit = (e, value) => {
    if (value !== null) {
      setUnit(value);
    }
  };

  const handleServing = (e) => {
    const value = e.target.value;
    const reg = /^[0-9\b]+$/;

    if (value === "" || reg.test(value)) {
      setServing(value);
    }
  };

  const addServing = () => setServing(serving + 1);

  const removeServing = () => {
    if (serving > 1) {
      setServing(serving - 1);
    }
  }

  return (
    <Grid container item direction="column" pt={5}>
      <Grid
        container
        item
        justifyContent="space-between"
        alignItems="center"
        pb={2}
      >
        <Servings
          serving={serving}
          handleServing={handleServing}
          addServing={addServing}
          removeServing={removeServing}
        />
        <UnitOptions handleUnitChange={handleUnit} unit={unit} />
      </Grid>
      <Typography variant="h4" component="h2" color="primary" fontWeight={700}>
        Ingredients
      </Typography>
      <IngredientList
        extendedIngredients={extendedIngredients}
        unit={unit}
        servings={servings}
        serving={serving}
      />
    </Grid>
  );
};

export default Ingredients;
