import RecipeCard from "./RecipeCard";
import NoRecipes from "./NoRecipes";
import { Grid } from "@mui/material";

const RecipeList = ({ recipes }) => {

    const recipeList = recipes.map(recipe => (
        <Grid item xs={2}>
        <RecipeCard 
            key={recipe.id}
            title={recipe.title}
        />
        </Grid>
    ))

    return (
        <>
        {recipes.length === 0 ? <NoRecipes /> : <Grid container columns={{ xs: 4 }} spacing={2} sx={{ p: 2 }}>{recipeList}</Grid> }
        </>
    )
};

export default RecipeList;