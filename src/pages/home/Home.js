import { Box } from "@mui/system";
import Intro from "./components/Intro";
import MyPantry from "./components/MyPantry";
import SearchIngredients from "./components/SearchIngredients";

  
  const Home = () => {
  

    return (
      <>
      <Box sx={{ position: "fixed", display: "flex", flexDirection: "column", minWidth: "100%", zIndex: "speedDial", backgroundColor:"background.paper", pb: 2 }}>
        <Intro />
        <SearchIngredients />
        </Box>
        <Box sx={{ minHeight: "320px" }}></Box>
        <MyPantry />
      </>
    );
  };
  
  export default Home;
  