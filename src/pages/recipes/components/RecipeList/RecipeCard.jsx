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
import { Link } from "react-router-dom";
import MissingIngWarning from "./MissingIng";

const RecipeCard = ({
  id,
  title,
  image,
  missingIng,
  toggleStarred,
  starredRecipes,
}) => {
  // Defines the position of the recipe card icons
  const iconPosition =
    missingIng === undefined || 0 ? "flex-end" : "space-between";

  // Data that is stored when a recipe is starred
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
        backgroundColor: "background.paper",
        boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.03)",
      }}
    >
      <CardActionArea
        component={Link}
        to={`${id}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          flexGrow: 1,
        }}
      >
        <CardMedia component="img" image={image} alt={title} />
        <CardContent sx={{ p: 1, pb: 0 }}>
          <Typography component="h2" variant="body2" fontWeight={700}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: iconPosition,
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
