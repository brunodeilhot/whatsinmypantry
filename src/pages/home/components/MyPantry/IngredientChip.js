import { HighlightOffRounded } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { styled } from "@mui/system";

const IngredientChip = ({ ingredient, removeIngredient }) => {

  const CustomChip = styled(Chip)({
    "& .MuiChip-label": {
      color: "#383A47"
    }
  })
  
  return (
    <CustomChip
    color="primary"
    variant="outlined"
    label={ingredient}
    deleteIcon={<HighlightOffRounded />}
    onDelete={(e) => removeIngredient(e, ingredient)}
    sx={{ borderWidth: "2px", backgroundColor: "secondary.main"}}
  />
  );
};

export default IngredientChip;
