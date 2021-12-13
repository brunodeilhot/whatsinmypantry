import { CloseRounded } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";

const Header = ({ handleTransition, image }) => {
  const gridStyles = {
    minHeight: "30vh",
    background: `url(${image}) no-repeat`,
    backgroundSize: "cover",
    backgroundColor: "text.secondary",
    borderBottom: "5px solid",
    borderColor: "primary.main",
  };
  const btStyles = {
    backgroundColor: "secondary.main",
    mr: 2,
    mt: 3,
    p: 0.5,
  };
  return (
    <Grid
      container
      item
      justifyContent="flex-end"
      alignItems="flex-start"
      sx={gridStyles}
    >
      <Fab
        aria-label="close"
        color="primary"
        onClick={handleTransition}
        sx={btStyles}
      >
        <CloseRounded color="primary" sx={{ fontSize: 40 }} />
      </Fab>
    </Grid>
  );
};

export default Header;
