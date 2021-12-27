import { MenuBookRounded, StarRateRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const NoRecipes = ({ starred, filtered }) => {
  const iconOptions = { fontSize: "20vh", color: "text.secondary", mb: 1 };

  const filteredMessage = filtered
    ? "Try changing your filter options."
    : "Add some ingredients to your pantry.";

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "30vh",
        }}
      >
        {starred ? (
          <StarRateRounded sx={iconOptions} />
        ) : (
          <MenuBookRounded sx={iconOptions} />
        )}

        <Typography component="p" variant="h4" color="text.secondary">
          No recipes found.
        </Typography>
        <Typography component="p" variant="body1" color="text.secondary">
          {starred ? "Star your favorite recipes." : filteredMessage}
        </Typography>
      </Box>
    </Box>
  );
};

export default NoRecipes;
