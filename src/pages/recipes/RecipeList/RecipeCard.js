import { StarRateRounded } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MissingIngWarning from "./MissingIng";

const RecipeCard = ({
  id,
  title,
  image,
  missingIng,
  toggleStarred,
  starredRecipes,
}) => {
  const iconPosition =
    missingIng === undefined || 0 ? "flex-end" : "space-between";

  const starredData = {
    id: id,
    title: title,
    image: image,
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        borderRadius: "22px",
        backgroundColor: "secondary.main",
        boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.03)",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={image} height="100%" alt={title} />
        <CardContent sx={{ p: 1, pb: 0 }}>
          <Typography component="h2" variant="body2" sx={{ fontWeight: "700" }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: iconPosition,
          flexGrow: 1,
          p: 0,
        }}
      >
        {missingIng === undefined || 0 ? null : (
          <MissingIngWarning missingIng={missingIng} />
        )}
        <IconButton
          onClick={(e) => toggleStarred(e, starredData)}
          sx={{ alignSelf: "flex-end" }}
        >
          {starredRecipes.findIndex((recipe) => recipe.id === id) === -1 ? (
            <StarRateRounded />
          ) : (
            <StarRateRounded sx={{ color: "#F6E258" }} />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
