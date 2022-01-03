import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Intro from "./components/Intro";
import MyPantry from "./components/MyPantry";
import SearchIngredients from "./components/SearchIngredients";

const Home = ({ desktop }) => {
  return (
    <Grid container direction="column">
      <Grid
        container
        item
        position={desktop ? "static" : "fixed"}
        direction="column"
        zIndex="speedDial"
        pb={2}
        backgroundColor="background.default"
      >
        <Intro />
        <SearchIngredients />
      </Grid>
      {!desktop && <Box minHeight={355}></Box>}
      <MyPantry />
    </Grid>
  );
};

export default Home;
