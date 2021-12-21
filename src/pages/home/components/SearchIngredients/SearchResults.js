import {
  AddCircleOutlineRounded,
  CheckCircleRounded,
} from "@mui/icons-material";
import {
  Avatar,
  ClickAwayListener,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { imageBaseURL } from "../../../../services";

const SearchResults = ({ ingredients, addIngredient, resetValue, pantry, searchBarWidth }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ClickAwayListener onClickAway={resetValue}>
        <List
          dense
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "fixed !important",
            width: searchBarWidth,
            border: "3px solid #7FD7C3",
            borderRadius: "30px",
            backgroundColor: "secondary.main",
            mt: 1,
            zIndex: "tooltip",
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
              <IconButton
                onClick={(e) => addIngredient(e, ingredient.name)}
                sx={{ p: 0, minWidth: "20px" }}
              >
                {pantry.indexOf(ingredient.name) === -1 ? (
                  <AddCircleOutlineRounded color="primary" />
                ) : (
                  <CheckCircleRounded color="primary" />
                )}
              </IconButton>
            </ListItem>
          ))}
        </List>
      </ClickAwayListener>
    </Box>
  );
};

export default SearchResults;
