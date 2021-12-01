import { Route, Routes } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import RecipeList from "./pages/recipes";

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home />}/>
                <Route path="/recipes" element={<RecipeList />} />
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )

};

export default MainRoutes;