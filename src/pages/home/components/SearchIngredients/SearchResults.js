import {
  AddCircleOutlineRounded,
  CheckCircleRounded,
} from "@mui/icons-material";
import {
  Avatar,
  ClickAwayListener,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { imageBaseURL } from "../../../../services";
import { useParentWidth } from "../../../../Utils";

const SearchResults = ({
  ingredients,
  ingredientToggle,
  resetValue,
  pantry,
  widthRef,
}) => {
  // Calls custom hook to calculate the width of the referenced element,
  // which in this case is the search bar component
  const searchBarWidth = useParentWidth(widthRef);

  return (
    <Grid container justifyContent="center">
      <ClickAwayListener onClickAway={resetValue}>
        <List
          dense
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "fixed !important",
            width: searchBarWidth,
            border: "3px solid",
            borderColor: "primary.main",
            borderRadius: "30px",
            backgroundColor: "secondary.main",
            mt: 1,
            zIndex: "tooltip",
          }}
        >
          {ingredients.map((ingredient) => (
            <ListItem key={ingredient.id} disablePadding sx={{ paddingX: 2 }}>
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
                onClick={(e) => ingredientToggle(e, ingredient.name)}
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
    </Grid>
  );
};

export default SearchResults;
