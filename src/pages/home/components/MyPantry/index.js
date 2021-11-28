import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import EmptyPantry from "./EmptyPantry";
import IngredientChip from "./IngredientChip";

const MyPantry = () => {
  const ingredients = useSelector((state) => state.myPantry);

  const ingredientList = ingredients.map((ingredient) => (
    <IngredientChip key={ingredient} ingredient={ingredient} />
  ));

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ minWidth: "80%", mt: 6 }}>
        {ingredients.length === 0 ? <EmptyPantry /> : ingredientList}
      </Box>
    </Box>
  );
};

export default MyPantry;
