import { KitchenRounded } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const EmptyPantry = () => (
    <Grid container flexDirection="column" alignItems="center">
      <KitchenRounded sx={{ fontSize: "20vh", color: "text.secondary", mt: "5vh" }} />
      <Typography variant="h4" component="p" color="text.secondary">
        Your pantry is empty.
      </Typography>
    </Grid>
  );

export default EmptyPantry;
