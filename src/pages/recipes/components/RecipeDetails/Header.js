import { CloseRounded } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

const Header = ({ handleTransition, image }) => {
  return (
    <Grid container item>
      <Grid container item justifyContent="flex-end" alignItems="center">
        <IconButton
          aria-label="close"
          color="primary"
          onClick={handleTransition}
        >
          <CloseRounded />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
