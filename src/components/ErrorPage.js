import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../assets/Logo.svg";

const ErrorPage = ({ apiLimit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
      dispatch({ type: "API_LIMIT", payload: false });
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  return (
    <Grid container justifyContent="center" alignContent="center">
      <Grid container item flexDirection="column" alignItems="center" p={2.5}>
        <Box
          component="img"
          sx={{ width: 170, height: 106, mt: 6, mb: 3 }}
          src={Logo}
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
