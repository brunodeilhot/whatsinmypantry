import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";

const MainRoutes = () => {

    return (
        <Routes>
            <Route index element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )

};

export default MainRoutes;