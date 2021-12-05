import RecipeCard from "./RecipeCard";
import { Grid } from "@mui/material";
import RecipesLoading from "./RecipesLoading";

const RecipeList = ({ recipes }) => {

    const recipeList = recipes.map(recipe => (
        <Grid key={recipe.id} item xs={2} sm={3} md={4} >
        <RecipeCard 
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            missingIng={recipe.missedIngredientCount}
        />
        </Grid>
    ))

    return (
        <>
        {recipes.length === 0 ? <RecipesLoading /> : <Grid container columns={{ xs: 4, sm: 9, md: 16 }} spacing={2} sx={{ p: 2 }}>{recipeList}</Grid> }
        </>
    )
};

export default RecipeList;