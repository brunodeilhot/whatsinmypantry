import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SadLogo from "../assets/SadLogo.svg";

const ErrorPage = ({ apiLimit, desktop, drawerWidth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // error page displays for 5 seconds then redirects back to the home page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (desktop) {
        navigate("about");
      } else {
        navigate("/whatsinmypantry/");  // Only for githubpage, this should be "/"
      }
      dispatch({ type: "API_LIMIT", payload: false });
    }, 5000);
    return () => clearTimeout(timer);
  }, [desktop, dispatch, navigate]);

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      width={desktop ? "fit-content" : "100%"}
      ml={desktop ? drawerWidth : 0}
    >
      <Grid container item flexDirection="column" alignItems="center" p={2.5}>
        <Box
          component="img"
          width={170}
          height={106}
          mt={6}
          mb={3}
          src={SadLogo}
          alt="Large whatsinmypantry smiling taco logo"
        />
        <Typography component="p" variant="h4" color="text.primary">
          {apiLimit ? "Api calls limit reached." : "Page not found."}
        </Typography>
        {apiLimit && (
          <Typography
            component="p"
            variant="body1"
            color="text.secondary"
            pt={2.5}
          >
            This is an academic project with a limited amount of api calls per
            day, please try again tomorrow.
          </Typography>
        )}
        <Typography
          component="p"
          variant="body1"
          color="text.secondary"
          pt={2.5}
        >
          You will be redirected in 5 seconds..
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
