import { MenuBookRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";


const NoRecipes = () => {

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "50%" }}>
                <MenuBookRounded sx={{ fontSize: "20vh", color: "text.secondary", mb: 1 }} />
                <Typography component="p" variant="h4" color="text.secondary">
                    No recipes found.
                </Typography>
                <Typography component="p" variant="body1" color="text.secondary">
                    Add some ingredients to your pantry.
                </Typography>
            </Box>
        </Box>
    )
};

export default NoRecipes;