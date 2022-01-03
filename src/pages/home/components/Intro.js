import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../assets/Logo.svg";

const Intro = () => (
  <Grid container flexDirection="column" alignItems="center">
    <Box
      component="img"
      width={170}
      height={106}
      mt={6}
      mb={3}
      src={Logo}
      alt="Large whatsinmypantry smiling taco logo"
    />
    <Typography variant="h3" fontWeight={700} component="p">
      Let's begin!
    </Typography>
    <Typography variant="body1" component="h2" mb={4} align="center">
      Search for ingredients to fill your pantry.
    </Typography>
  </Grid>
);

export default Intro;
