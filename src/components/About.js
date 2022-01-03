import { CopyrightRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../assets/Logo.svg";

const About = ({ desktop }) => {
  // Font and Icon colors change based on return value of the mediaquery
  const fontColor = desktop ? "text.primary" : "secondary.main";
  const iconColor = desktop ? "primary" : "secondary";

  return (
    <Grid
      container
      height="100%"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      m={2.5}
      color={fontColor}
    >
      {!desktop && (
        <Grid container flexDirection="column">
          <Box
            component="img"
            height={35}
            width={52}
            src={Logo}
            alt="whatsinmypantry smiling taco logo"
          />
          <Typography variant="h5" component="h2" paddingY={1}>
            about
          </Typography>
        </Grid>
      )}
      <Typography variant="body2" component="p" pb={1}>
        #whatsinmypantry is a recipe management app meant to make your daily
        life easier by helping you decide what to cook based on what you have at
        home.
      </Typography>
      <Typography variant="body2" component="p">
        This app was created as a FrontEnd project for an academic course and is
        powered by{" "}
        <Link
          href="https://spoonacular.com/food-api"
          target="_blank"
          underline="none"
          color={iconColor}
        >
          Spoonacular API.
        </Link>
      </Typography>
      <Box component="footer" mt={4}>
        <Grid container>
          <IconButton
            href="https://www.linkedin.com/in/brunodeilhot/"
            target="_blank"
          >
            <LinkedIn color={iconColor} fontSize="large" />
          </IconButton>
          <IconButton href="https://github.com/brunodeilhot" target="_blank">
            <GitHub color={iconColor} sx={{ fontSize: 35 }} />
          </IconButton>
        </Grid>
        <Typography
          variant="body2"
          component="p"
          display="flex"
          alignItems="center"
        >
          #whatsinmypantry by Bruno Deilhot
          <CopyrightRounded fontSize="small" sx={{ marginX: 0.5 }} />
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Grid>
  );
};

export default About;
