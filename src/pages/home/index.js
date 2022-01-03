import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Intro from "./components/Intro";
import MyPantry from "./components/MyPantry";
import SearchIngredients from "./components/SearchIngredients";

const Home = () => {
  const { desktop } = useSelector((state) => state.mediaqueries);
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
