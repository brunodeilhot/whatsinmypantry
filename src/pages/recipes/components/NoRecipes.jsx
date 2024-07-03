import { MenuBookRounded, StarRateRounded } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const NoRecipes = ({ starred, filtered }) => {
  const iconOptions = { fontSize: "20vh", color: "text.secondary", mb: 1 };

  const message = filtered
    ? "Try changing your filter options."
    : "Add some ingredients to your pantry.";

  return (
    <Grid container justifyContent="center" alignContent="center">
      <Grid container flexDirection="column" alignItems="center" mt="25vh">
        {starred ? (
          <StarRateRounded sx={iconOptions} />
        ) : (
          <MenuBookRounded sx={iconOptions} />
        )}
        <Typography component="p" variant="h4" color="text.secondary">
          No recipes found.
        </Typography>
        <Typography component="p" variant="body1" color="text.secondary">
          {starred ? "Star your favorite recipes." : message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoRecipes;
