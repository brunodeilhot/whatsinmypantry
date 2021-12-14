import { Grid, Typography } from "@mui/material";
import DietIcons from "./DietIcons";
import Info from "./Info";

const Intro = ({
  title,
  readyInMinutes,
  healthScore,
  glutenFree,
  dairyFree,
  vegetarian,
  vegan,
}) => {
  return (
    <Grid container item pt={2.5}>
      <Info readyInMinutes={readyInMinutes} healthScore={healthScore} />
      <Typography
        variant="h3"
        component="h2"
        id="recipe-details-title"
        pt={5}
        pb={1}
        fontWeight={700}
      >
        {title}
      </Typography>
      <DietIcons
        glutenFree={glutenFree}
        dairyFree={dairyFree}
        vegetarian={vegetarian}
        vegan={vegan}
      />
    </Grid>
  );
};

export default Intro;
