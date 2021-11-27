import { AddCircleOutlineRounded } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

const SearchResults = ({ ingredients, addIngredient }) => {
  const imageBaseURL = "https://spoonacular.com/cdn/ingredients_100x100/";

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <List
        dense
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          minWidth: "80%",
          border: "3px solid #7FD7C3",
          borderRadius: "30px",
          backgroundColor: "secondary.main",
          mt: 1,
        }}
      >
        {ingredients.map((ingredient) => (
          <ListItem key={ingredient.id} disablePadding sx={{ pr: 2, pl: 2 }}>
            <ListItemAvatar sx={{ minWidth: "20px" }}>
              <Avatar
                src={imageBaseURL + ingredient.image}
                sx={{ maxWidth: 20, maxHeight: 20 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={ingredient.name}
              sx={{ textAlign: "center", color: "text.primary" }}
            />
            <IconButton onClick={(e) => addIngredient(e, ingredient.name)} sx={{ p: 0, minWidth: "20px" }}>
              <AddCircleOutlineRounded color="primary"/>
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SearchResults;
