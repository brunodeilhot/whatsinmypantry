import { Route, Routes } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import NotFound from "./pages/notfound/NotFound";

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home />}/>
                <Route path="/recipes" element={<Recipes />} />
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )

};

export default MainRoutes;