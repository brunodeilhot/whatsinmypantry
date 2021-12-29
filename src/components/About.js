import { CopyrightRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../assets/Logo.svg";

const About = ({ desktop }) => {
  const fontColor = desktop ? "text.primary" : "secondary.main";

  return (
    <Box sx={{ m: 2.5, color: fontColor }}>
      {!desktop && (
        <>
          <Box
            component="img"
            sx={{ height: 35, width: 52 }}
            src={Logo}
            alt="whatsinmypantry smiling taco logo"
          />
          <Typography variant="h5" component="h2" pb={1}>
            about
          </Typography>
        </>
      )}
      <Typography variant="body2" component="p" pb={1}>
        #whatsinmypantry is a recipe management app meant to make your daily
        life easier by helping you decide what to cook based on what you have at
        home.
      </Typography>
      <Typography variant="body2" component="p">
        This app was created as a FrontEnd project for an academic course.
      </Typography>
      <Box component="footer" mt={4}>
        <Grid container>
          <IconButton
            href="https://www.linkedin.com/in/brunodeilhot/"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton href="https://github.com/brunodeilhot" target="_blank">
            <GitHub sx={{ fontSize: 35 }} />
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
    </Box>
  );
};

export default About;
