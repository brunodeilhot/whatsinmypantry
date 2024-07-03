import { Grid } from "@mui/material";
import Intro from "./components/Intro";
import MyPantry from "./components/MyPantry";
import SearchIngredients from "./components/SearchIngredients";

const Home = () => (
  <Grid container item direction="column" >
    <Intro />
    <SearchIngredients />
    <MyPantry />
  </Grid>
);

export default Home;
