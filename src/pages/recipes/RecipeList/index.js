import RecipeCard from "./RecipeCard";
import NoRecipes from "./NoRecipes";

const RecipeList = ({ recipes }) => {

    const recipeList = recipes.map(recipe => (
        <RecipeCard 
            key={recipe.id}
            title={recipe.title}
        />
    ))

    return (
        <>
        {recipes.length > 0 ? <NoRecipes /> : recipeList}
        </>
    )
};

export default RecipeList;