import { Grid } from "@mui/material";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Intro from "./components/Intro";
import MyPantry from "./components/MyPantry";
import SearchIngredients from "./components/SearchIngredients";

const Home = () => {
  const introRef = useRef();

  const { desktop } = useSelector((state) => state.mediaqueries);
  return (
    <Grid container direction="column">
      <Grid
        ref={introRef}
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
      <MyPantry introRef={introRef} desktop={desktop} />
    </Grid>
  );
};

export default Home;
