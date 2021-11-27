import { KitchenRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";


const MyPantry = () => {

    const ingredients = useSelector((state) => state.myPantry);

    return (
        <>
        {ingredients.map((ingredient) => (<p>{ingredient}</p>))}
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6 }}>
            <KitchenRounded sx={{ fontSize: '20vh', color: 'text.secondary' }} />
            <Typography variant="h4" component="p" color="text.secondary" >
                Your pantry is empty.
            </Typography>
            </Box>
        </Box>
        </>
    )
};

export default MyPantry;